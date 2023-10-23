import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function TelaHome(){
    // Criando uma variável para armazenar o objeto/array que virá no Async Storage
    const [usuario, setUsuario] = useState(''); 

    // Função para coletar o objeto/array no Async Storage
    async function getData(){
        const resposta = await AsyncStorage.getItem('dados');
        const objeto = resposta != null ? JSON.parse(resposta) : null;

        setUsuario(objeto);
    };

    getData();

    return(
        <ScrollView>
            <Text>{ JSON.stringify(usuario) }</Text>
        </ScrollView>
    )
}

export default TelaHome;