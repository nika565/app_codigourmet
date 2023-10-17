import React from "react";
import { ScrollView, SafeAreaView, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import estilos from "./estilo";

function TelaLogin( { navigation } ){
    return(
        <SafeAreaView style={estilos.tela}>
            <LinearGradient style={estilos.tela} colors={['#FFBFB1', '#FFFFFF']}>
                <ScrollView style={estilos.tela}>
                    <View style={estilos.appbarLogin}>
                        <Image style={estilos.navbarLogo} source={require("../../../assets/logo/navbarLogo.png")}/>
                    </View>

                    <View style={estilos.container}>
                        <Text style={estilos.titulo}>Login</Text>

                        <TextInput placeholder="E-mail" style={estilos.input} />
                        <TextInput placeholder="Senha" style={estilos.input} />
                        <TouchableOpacity style={estilos.botao} onPress={() => { navigation.navigate( "Home" ) } }><Text style={estilos.txtBotao}>Entrar</Text></TouchableOpacity>

                        <TouchableOpacity style={estilos.link}><Text style={estilos.txtLink}>Esqueci minha senha</Text></TouchableOpacity>

                        <View style={estilos.divisor}>
                            <View style={estilos.linha}></View>
                            <Text style={estilos.txtDivisor}>ou</Text>
                            <View style={estilos.linha}></View>
                        </View>

                        <TouchableOpacity style={estilos.link} onPress={() => { navigation.navigate ( "Cadastro" ) } }><Text style={estilos.txtLink}>Criar nova conta</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default TelaLogin;