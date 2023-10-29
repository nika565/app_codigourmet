import React, { useState, useEffect } from "react";
import { ActivityIndicator, Text, SafeAreaView, TextInput, View, TouchableOpacity, Image, FlatList, ScrollView } from "react-native";
import { estilos } from "./estilos";
import pesquisa from '../../services/api/receitas/pesquisa';
import AsyncStorage from "@react-native-async-storage/async-storage";
import receitas from "../../services/api/receitas/receitas";

function TelaHome() {
    const [nomeReceita, setNomeReceita] = useState('');
    const [dados, setDados] = useState('');
    const [carregando, setCarregando] = useState(true);
    const [usuario, setUsuario] = useState('');

    useEffect(() => {
        async function getData() {
            const resposta = await AsyncStorage.getItem('dados');
            const objeto = resposta != null ? JSON.parse(resposta) : '';

            setUsuario(objeto);

            const retornoReceitas = await receitas(usuario[1]);
            setDados(retornoReceitas.dados);
            setCarregando(false); // Indica que a busca de dados está completa
        }

        getData();
    }, [carregando]);

    return (
        <SafeAreaView style={[estilos.cor, estilos.tela]}>
            <ScrollView style={estilos.cor}>

                <View style={estilos.container}>
                    <TextInput
                        placeholder="Encontre uma receita"
                        style={estilos.busca}
                        onChangeText={(texto) => setNomeReceita(texto)}
                    />
                    
                    <TouchableOpacity
                        style={estilos.btnBusca}
                        onPress={async () => {
                            const resposta = await pesquisa(nomeReceita, usuario[1]);
                            setDados(resposta.dados);
                        }}
                    >
                        <Image style={estilos.imgBusca} source={require('../../../assets/icons/search.png')} />
                    </TouchableOpacity>
                </View>
                
                {carregando ? ( // Exibir uma mensagem de carregamento enquanto os dados estão sendo buscados
                    <ActivityIndicator size="large" color="#FF2D00" />
                ) : (
                    
                    <FlatList
                        data={dados}
                        keyExtractor={(item) => item._id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={estilos.cardReceita}>
                                <View style={estilos.fundoImg}>
                                    <Image style={estilos.imgReceita} source={require('../../../assets/icons/cozinha.png')} />
                                </View>
                                <View style={estilos.receitaInfo}>
                                    <Text style={estilos.titulo}>{item.nome}</Text>
                                    <Text style={estilos.subtitulo}>{item.tempo} minutos</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />

                )}
            </ScrollView>
        </SafeAreaView>
    );
}

export default TelaHome;
