import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estilo from './estilo.js';

export default function TelaInicial({navigation}){
    return (
        <View style={estilo.container}>
            <LinearGradient style={estilo.gradient} colors={['#F8836A', 'rgba(242, 190, 179, 0.42)']}>
                 <Image style={estilo.inicialLogo} source={require("../../../assets/logo/inicialLogo.png")} />
                 
                 <TouchableOpacity
                    style={estilo.botaoCadastrar}
                    onPress={() => {
                     navigation.navigate('Cadastro');
                    }}
                 >
                    <Text style={estilo.botaoTextoCadastrar}>Cadastre-se</Text>

                 </TouchableOpacity>

                 <TouchableOpacity
                    style={estilo.botaoEntrar}
                    onPress={() => {
                     navigation.navigate('Login');
                    }}
                 >
                    <Text style={estilo.botaoTextoEntrar}>Entrar</Text>

                 </TouchableOpacity>
            </LinearGradient>
           
        </View>
    )};

