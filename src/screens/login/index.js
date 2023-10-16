import React from "react";
import { ScrollView, SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";

function TelaLogin( { navigation } ){
    return(
        <SafeAreaView>
            <ScrollView>
                <Text>Login</Text>
                <TextInput placeholder="E-mail" />
                <TextInput placeholder="Senha" />

                <TouchableOpacity onPress={() => { navigation.navigate( "Home" ) } }><Text>Entrar</Text></TouchableOpacity>

                <TouchableOpacity><Text>Esqueci a senha</Text></TouchableOpacity>
                <Text>ou</Text>
                <TouchableOpacity onPress={() => { navigation.navigate ( "Cadastro" ) } }><Text>Criar nova conta</Text></TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TelaLogin;