import React, { useState, useEffect } from "react";
import { ActivityIndicator, Text, SafeAreaView, TextInput, View, TouchableOpacity, Image, FlatList } from "react-native";
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
        <View style={[estilos.cor, estilos.tela]}>
            <View style={estilos.cor}>
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
                            <View style={estilos.card}>
                                <Text style={estilos.titulo}>{item.nome}</Text>
                                <Text>Tempo de preparo: {item.tempo} min</Text>
                                <Text>Ingredientes: {item.ingredientes}</Text>
                                <TouchableOpacity><Text>Ver mais</Text></TouchableOpacity>
                                {/* Adicione aqui outros componentes para exibir mais informações */}
                            </View>
                        )}
                    />

                )}
            </View>
        </View>
    );
}

export default TelaHome;
