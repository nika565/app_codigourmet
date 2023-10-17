import React, {useState} from "react";
import { ScrollView, SafeAreaView, Text, TextInput, TouchableOpacity, View, Image, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import cadastro from "../../services/api/cadastro";

import estilos from "./estilos";

function TelaCadastro( { navigation } ){

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    return(
        <SafeAreaView style={estilos.tela}>
            <LinearGradient style={estilos.tela} colors={['#FFBFB1', '#FFFFFF']}>
                <ScrollView style={estilos.tela}>
                    <View style={estilos.appbarLogin}>
                        <Image style={estilos.navbarLogo} source={require("../../../assets/logo/navbarLogo.png")}/>
                    </View>

                    <View style={estilos.container}>
                        <Text style={estilos.titulo}>Cadastre-se</Text>

                        <TextInput placeholder="Nome" style={estilos.input} onChangeText={(texto) => {
                            setNome(texto);
                        } } />
                        <TextInput placeholder="Sobrenome" style={estilos.input} onChangeText={(texto) => {
                            setSobrenome(texto);
                        }}/>
                        <TextInput placeholder="E-mail" style={estilos.input} onChangeText={(texto) => {
                            setEmail(texto);
                        }} />
                        <TextInput placeholder="Senha" style={estilos.input} onChangeText={(texto) => {
                            setSenha(texto);
                        }} />

                        <TouchableOpacity style={estilos.botao} onPress={
                            async () => {
                                const dados = await cadastro(nome, sobrenome, email, senha);

                                if(dados.status === 'success'){
                                    Alert.alert('', dados.msg);
                                    
                                    navigation.navigate("Login");
                                }else{
                                    Alert.alert('', dados.msg);
                                }
                            }
                        }><Text style={estilos.txtBotao}>Cadastrar</Text></TouchableOpacity>

                        <TouchableOpacity style={estilos.link} onPress={() => { navigation.navigate( "Login" ) } }><Text style={estilos.txtLink}>Voltar</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default TelaCadastro;