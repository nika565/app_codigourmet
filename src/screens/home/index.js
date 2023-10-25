import React, { useState, useEffect } from "react";
import { ScrollView, Text, SafeAreaView, TextInput, View, TouchableOpacity, Image } from "react-native";
import { estilos } from "./estilos";
import pesquisa from '../../services/api/receitas/pesquisa';
import AsyncStorage from "@react-native-async-storage/async-storage";

function TelaHome() {

    const [nomeReceita, setNomeReceita] = useState('');

    // Criando uma variável para armazenar o objeto/array que virá no Async Storage
    const [usuario, setUsuario] = useState('');

    useEffect(() => {
        // Função para coletar o objeto/array no Async Storage
        async function getData() {
            const resposta = await AsyncStorage.getItem('dados');
            const objeto = resposta != null ? JSON.parse(resposta) : null;

            setUsuario(objeto);

            console.log(usuario[1])
        };

        getData();
    }, [])

    console.log(usuario);

    return (
        <SafeAreaView style={[estilos.tela, estilos.cor]}>
            <ScrollView style={estilos.cor}>
                <View style={estilos.container}>
                    <TextInput placeholder="Encontre uma receita" style={estilos.busca} onChangeText={(texto) => setNomeReceita(texto)} />
                    <TouchableOpacity style={estilos.btnBusca} onPress={async () => {

                        const resposta = await pesquisa(nomeReceita, usuario[1]);

                        console.log(resposta);

                    }} ><Image style={estilos.imgBusca} source={require('../../../assets/icons/search.png')} /></TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TelaHome;