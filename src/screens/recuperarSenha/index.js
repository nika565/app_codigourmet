import React, { useState } from "react";
import { ScrollView, SafeAreaView, Text, TextInput, TouchableOpacity, View, Image, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { enviarEmail } from "../../services/api/recuperarSenha/recuperarSenha";

import estilos from "./estilo";

function TelaEnviarEmail({ navigation }) {

    // Variáveis de login
    const [email, setEmail] = useState('renato@email.com');


    return (
        <SafeAreaView style={estilos.tela}>
            <LinearGradient style={estilos.tela} colors={['#FFBFB1', '#FFFFFF']}>
                <ScrollView style={estilos.tela}>
                    <View style={estilos.appbarLogin}>
                        <Image style={estilos.navbarLogo} source={require("../../../assets/logo/navbarLogo.png")} />
                    </View>

                    <View style={estilos.container}>
                       

                        <TextInput placeholder="E-mail" style={estilos.input} onChangeText={(texto) => setEmail(texto)} />
        
                        <TouchableOpacity style={estilos.botao} onPress={async () => {

                            const resposta = await enviarEmail(email);

                            if (resposta.status === 'error') {
                                Alert.alert("Algo deu errado")
                            } else {
                                Alert.alert("E-mail enviado com sucesso!");
                            }


                        }}><Text style={estilos.txtBotao}>Enviar email</Text></TouchableOpacity>

                        

                

                        
                    </View>
                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default TelaEnviarEmail;