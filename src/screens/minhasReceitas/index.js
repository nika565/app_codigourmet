import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, Image, ActivityIndicator, FlatList, Alert } from "react-native";

import estilos from "./estilo";
import AsyncStorage from "@react-native-async-storage/async-storage";

import minhasReceitas from "../../services/api/minhasReceitas/minhasReceitas";

function TelaMinhasReceitas({ navigation }) {

    const imagePress = () => {
        navigation.navigate('CriarReceita');
    };

    const [dados, setDados] = useState([]);
    const [carregando, setCarregando] = useState(true);
    // const [usuario, setUsuario] = useState('');

    useEffect(() => {
        async function getData() {
            
            const dadosReceitas = await minhasReceitas();
            if (dadosReceitas.status === 'error') {
                Alert.alert(dadosReceitas.msg)
            } else {

                if (dadosReceitas.dados.length === 0) {
                    Alert.alert('Você não tem nenhuma receita cadastrada.', 'Por favor cadastre uma receita!');
                    navigation.navigate('CriarReceita');
                } else {
                    setDados(dadosReceitas.dados);
                    setCarregando(false);
                }
            }

        }

        getData();
    }, []);



    return (
        <SafeAreaView style={estilos.tela}>
            <View style={estilos.tela}>
                <View style={estilos.appbarLogin}>
                    <Image style={estilos.navbarLogo} source={require("../../../assets/logo/navbarLogo.png")}></Image>
                </View>
                <View style={estilos.container}>
                    <Text style={estilos.txt}>Minhas Receitas</Text>
                </View>

                {carregando ? ( // Exibir uma mensagem de carregamento enquanto os dados estão sendo buscados
                    <ActivityIndicator size="large" color="#FF2D00" />
                ) : (

                    <View>
                        <FlatList
                            data={dados}
                            keyExtractor={(item) => item._id.toString()}
                            renderItem={({ item }) => (
                                <View>
                                    <Text>{item.nome}</Text>
                                    <Text>Tempo de preparo: {item.tempo} min</Text>
                                    <Text>Ingredientes: {item.ingredientes}</Text>
                                    <TouchableOpacity><Text>Ver mais</Text></TouchableOpacity>
                                    {/* Adicione aqui outros componentes para exibir mais informações */}
                                </View>
                            )}
                        />
                    </View>

                )}

                <View style={estilos.imageAdd}>
                    <TouchableOpacity onPress={imagePress}>
                        <Image style={estilos.addIcon} source={require("../../../assets/icons/botao_adicionar.png")}></Image>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );

};

export default TelaMinhasReceitas;