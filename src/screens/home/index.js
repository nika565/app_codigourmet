import React, { useState } from "react";
import { ScrollView, Text, SafeAreaView, TextInput, View, TouchableOpacity, Image } from "react-native";
import { estilos } from "./estilos";

import AsyncStorage from "@react-native-async-storage/async-storage";

function TelaHome(){
    // // Criando uma variável para armazenar o objeto/array que virá no Async Storage
    // const [usuario, setUsuario] = useState(''); 

    // // Função para coletar o objeto/array no Async Storage
    // async function getData(){
    //     const resposta = await AsyncStorage.getItem('dados');
    //     const objeto = resposta != null ? JSON.parse(resposta) : null;

    //     setUsuario(objeto);
    // };

    // getData();

    return(
        <SafeAreaView style={ [estilos.tela, estilos.cor] }>
            <ScrollView style={ estilos.cor }>
                <View style={ estilos.container }>
                    <TextInput placeholder="Encontre uma receita" style={ estilos.busca } />
                    <TouchableOpacity style={estilos.btnBusca}><Image style={estilos.imgBusca} source={require('../../../assets/icons/search.png')} /></TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TelaHome;