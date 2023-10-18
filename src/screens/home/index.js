import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import autenticar from "../../services/api/autenticar";

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

    // const verificado = autenticar(usuario[1])

    // if(verificado == 1){
    //     console.log('foi');
    // };

    return(
        <ScrollView>
            <Text>{ JSON.stringify(usuario) }</Text>
        </ScrollView>
    )
}

export default TelaHome;