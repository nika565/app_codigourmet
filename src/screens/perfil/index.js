import React, { useState, useEffect } from "react";
import { ScrollView, Text, SafeAreaView, View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { estilos } from "./estilos";
// import excluirUsuario from "../../services/api/usuario/excluirUsuario";

//  RESOLVER ISSO AQUI
import AsyncStorage from "@react-native-async-storage/async-storage";

function TelaPerfil( { navigation } ){

    const [dados, setDados] = useState('');

    
    useEffect(() => {
        async function getData(){
            const resposta = await AsyncStorage.getItem('dados');
            const objeto = resposta != null ? JSON.parse(resposta) : null;

    
           setDados(objeto);
        }

        getData();
    }, [])

    console.log(dados);

    // const nome = dados[0]['nome'];
    // const sobrenome = dados[0]['sobrenome'];
    // const email = dados[0]['email'];

    // const nome = 'oi';
    // const sobrenome = 'olá';
    // const email = 'oi@oi.com';

    return(
        <SafeAreaView style={estilos.tela}>
            <ScrollView style={estilos.corDeFundo}>
                <View style={[estilos.centralizar, estilos.container]}>
                    <Image style={estilos.imagem} source={require("../../../assets/icons/chef_icon.png")}/>
                    <Text style={estilos.titulo}>Meu perfil</Text>
                </View>

                <View style={[estilos.centralizar, estilos.formulario]}>
                    <View style={estilos.containerInput}>
                        <Text style={estilos.label}>Nome</Text>
                        <TextInput style={estilos.input} editable={false} />
                    </View>

                    <View style={estilos.containerInput}>
                        <Text style={estilos.label}>Sobrenome</Text>
                        <TextInput style={estilos.input}  editable={false} />
                    </View>

                    <View style={estilos.containerInput}>
                        <Text style={estilos.label}>E-mail</Text>
                        <TextInput style={estilos.input} editable={false} />
                    </View>

                    <TouchableOpacity style={estilos.botao}><Text style={estilos.txtBotao}>Alterar senha</Text></TouchableOpacity>
                    <TouchableOpacity style={estilos.botao} onPress={() => {
                        Alert.alert('Cuidado!', 'Você está prestes a excluir sua conta. Essa ação não pode ser revertida!', [
                            {
                                text: "Cancelar"
                            },
                            
                            {
                                text: "Estou ciente!",
                                onPress: () => {
                                    excluirUsuario(dados[0]['id'], dados[1])
                                },
                                style: "cancel"
                            }
                        ])
                    }}><Text style={estilos.txtBotao}>Excluir conta</Text></TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Home")
                    }}><Text style={estilos.link}>Voltar</Text></TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TelaPerfil;