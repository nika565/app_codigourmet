import React, {useState} from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, TextInput, Image, Alert, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { recuperarSenha } from '../../services/api/recuperarSenha/recuperarSenha';

import estilos from "./estilo";

function TelaRecuperarSenha ({ navigation }){

    const [senha, setSenha] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const [codigo, setCodigo] = useState('');

    return(
        <SafeAreaView style={estilos.tela}>
            <ScrollView style={estilos.tela}>
                <LinearGradient style={estilos.tela} colors={['#FFBFB1', '#FFFFFF']}>
                    <View style={estilos.appbarLogin}>
                        <Image style={estilos.navbarLogo} source={require("../../../assets/logo/navbarLogo.png")}></Image>
                    </View>
                    <View style={estilos.tela}>
                        <Text style={estilos.txt}>Recuperar Senha</Text>
                        <Text style={estilos.txtEnunciado}>Digite o código enviado por e-mail</Text>
                        <TextInput placeholder="Código" style={estilos.input} onChangeText={(texto) => setCodigo(texto)} value={texto}/>
                        <TextInput placeholder="Digite a nova senha" style={estilos.input} onChangeText={(texto) => setSenha(texto)} value={texto}/>
                        <TextInput placeholder="Confirmar nova senha" style={estilos.input} onChangeText={(texto) => setConfirmar(texto)} value={texto}/>

                        <TouchableOpacity
                            style={estilos.botao} onPress={async() => {
                                
                                if( senha !== confirmar) {
                                    Alert.alert("Senhas não conferem");
                                    return;
                                }
                                
                                const resposta = await recuperarSenha(codigo, senha);

                                if (resposta.status === 'error') {
                                    Alert.alert("Algo deu errado")
                                } else {
                                    Alert.alert("Senha salva com sucesso!");
                                }
                            }}>
                            <Text style={estilos.txtBotao}>Salvar</Text>
                        </TouchableOpacity>
                        

                        <TouchableOpacity
                            style={estilos.link}
                            onPress={() => (navigation.navigate("EnviarEmail"))}>
                            <Text style={estilos.link}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    );
};

export default TelaRecuperarSenha;






