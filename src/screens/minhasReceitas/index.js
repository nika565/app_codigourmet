import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, Image} from "react-native";

import estilos from "./estilo";
import AsyncStorage from "@react-native-async-storage/async-storage";

import minhasReceitas from "../../services/api/minhasReceitas/minhasReceitas";

function TelaMinhasReceitas ({ navigation }){

    const imagePress = () => {
        navigation.navigate('CriarReceita');
    };

    const [idCriador, setCriador] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        async function getData(){
            const resposta = await AsyncStorage.getItem('dados');
            const objeto = resposta != null ? JSON.parse(resposta) : '';

            setCriador(objeto[0].id);
            setToken(objeto[1]);
        }

        getData();
    }, []);

    console.log(idCriador)
    console.log(token)

    async () => {
        const dadosReceitas = await minhasReceitas(idCriador, token)
    }

    return(
        <SafeAreaView style={estilos.tela}>
            <ScrollView style={estilos.tela}>
                <View style={estilos.appbarLogin}>
                    <Image style={estilos.navbarLogo} source={require("../../../assets/logo/navbarLogo.png")}></Image>
                </View>
                <View style={estilos.container}>
                    <Text style={estilos.txt}>Minhas Receitas</Text>
                </View>

                {idCriador && token && (
                    <View>
                        <Text>{idCriador}</Text>
                        <Text>{token}</Text>
                    </View>
                )}

                <View style={estilos.imageAdd}>
                    <TouchableOpacity onPress={imagePress}>
                        <Image style={estilos.addIcon} source={require("../../../assets/icons/botao_adicionar.png")}></Image>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
    
};

export default TelaMinhasReceitas;