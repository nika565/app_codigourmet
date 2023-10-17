import React from "react";
import { ScrollView, SafeAreaView, Text, TextInput, TouchableOpacity, View, Image, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import estilos from "./estilos";

function TelaCadastro( { navigation } ){
    return(
        <SafeAreaView style={estilos.tela}>
            <LinearGradient style={estilos.tela} colors={['#FFBFB1', '#FFFFFF']}>
                <ScrollView style={estilos.tela}>
                    <View style={estilos.appbarLogin}>
                        <Image style={estilos.navbarLogo} source={require("../../../assets/logo/navbarLogo.png")}/>
                    </View>

                    <View style={estilos.container}>
                        <Text style={estilos.titulo}>Cadastre-se</Text>

                        <TextInput placeholder="Nome" style={estilos.input} />
                        <TextInput placeholder="Sobrenome" style={estilos.input} />
                        <TextInput placeholder="E-mail" style={estilos.input} />
                        <TextInput placeholder="Senha" style={estilos.input} />

                        <TouchableOpacity style={estilos.botao} onPress={
                            () => Alert.alert('', 'Cadastro realizado com sucesso', [
                                                    {
                                                        text: 'Ok!',
                                                        onPress: () => {navigation.navigate("Login")}
                                                    }
                                                ]
                                            )
                        }><Text style={estilos.txtBotao}>Cadastrar</Text></TouchableOpacity>

                        <TouchableOpacity style={estilos.link} onPress={() => { navigation.navigate( "Login" ) } }><Text style={estilos.txtLink}>Voltar</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default TelaCadastro;