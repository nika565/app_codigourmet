import React, {useState} from "react";
import { ScrollView, SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import criarReceita from "../../services/api/receitas/criarReceita";

import estilos from './estilo';

function TelaReceita( {navigation} ){

    const [titulo, setTitulo] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [preparo, setPreparo] = useState('');
    const [tempo, setTempo] = useState('');

    return(
        <SafeAreaView style={estilos.SafeAreaView}>
            <ScrollView style={estilos.tela}>
                <View style={estilos.appbarLogin}>
                    <Image style={estilos.navbarLogo} source={require("../../../assets/logo/navbarLogo.png")}></Image>
                </View>
                <View style={estilos.container}>

                    <Text style={estilos.txt}>Título</Text>
                    <TextInput style={estilos.input1} onChangeText={(texto) => setTitulo(texto)}/>

                    <Text style={estilos.txt}>Ingredientes</Text>
                    <TextInput style={estilos.input2} multiline={true} onChangeText={(texto) => setIngredientes(texto)}/>

                    <Text style={estilos.txt}>Modo de preparo</Text>
                    <TextInput style={estilos.input2} multiline={true} onChangeText={(texto) => setPreparo(texto)}/>

                    <Text style={estilos.txt}>Tempo de preparo (min)</Text>
                    <TextInput style={estilos.input1} onChangeText={(texto) => setTempo(texto)} keyboardType="numeric"/>

                    <TouchableOpacity style={estilos.botao} onPress={ async () => {
                        const receita = await criarReceita(titulo, ingredientes, preparo, tempo);

                        if(receita.status === 'success'){
                            Alert.alert('', receita.msg);

                        }else{
                            Alert.alert('', receita.msg);
                        }
                    }}>
                        <Text style={estilos.txtBotao}>Salvar</Text>
                    </TouchableOpacity>

                    
                </View>

                <View style={estilos.containerLink}>
                    <TouchableOpacity style={estilos.link} onPress={() => navigation.navigate("Home")}>
                        <Text style={estilos.link}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TelaReceita;