import React, {useState} from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, TextInput, Image, Alert, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import estilo from "./estilos";

function TelaRecuperarSenha ({ navigation }){

    const [modalVisivel, setModalVisivel] = useState(false);

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
                        <TextInput placeholder="Código" style={estilos.input} onChangeText={texto} value={texto}/>
                        <TextInput placeholder="Digite a nova senha" style={estilos.input} onChangeText={texto} value={texto}/>
                        <TextInput placeholder="Confirmar nova senha" style={estilos.input} onChangeText={texto} value={texto}/>

                        <Modal
                            animationType='slide'
                            transparent={true}
                            visible={modalVisivel}
                            onRequestClose={() => {
                                Alert.alert('Modal fechado');
                                setModalVisivel(!modalVisivel);
                            }}>
                            
                            <View style={estilos.modalCentralizado}>
                                <View style={modalView}>
                                    <Text style={estilos.txtModal}>Senha salva com sucesso!</Text>
                                    <Pressable 
                                        style={[estilos.botao, estilos.fechaBotao]}
                                        onPress={() => setModalVisivel(!modalVisivel)}>
                                        <Text style={estilos.txtBotao}>Fechar</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                        <Pressable 
                            style={[estilos.botao, estilos.abreBotao]}
                            onPress={() => setModalVisivel(true)}>
                            <Text style={estilos.txtBotao}>Salvar</Text>
                        </Pressable>

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