import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

function TelaCadastro( { navigation } ){
    return(
        <ScrollView>
            <Text>Tela de cadastro</Text>
            <TouchableOpacity onPress={() => { navigation.navigate("Login") } }><Text>Voltar</Text></TouchableOpacity>
        </ScrollView>
    )
}

export default TelaCadastro;