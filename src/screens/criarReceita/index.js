import React, {useState} from "react";
import { ScrollView, SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";


import estilos from './estilo';

function TelaReceita( {navigation} ){

    const [titulo, setTitulo] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [preparo, setPreparo] = useState('');
    const [tempo, setTempo] = useState('');

    return(
        <SafeAreaView style={estilos.SafeAreaView}>
            <ScrollView style={estilos.tela}>
                <View style={estilos.container}>
                    <Text style={estilos.txt}>Título</Text>
                    <TextInput style={estilos.input} onChangeText={(texto) => {setTitulo(texto)}}/>

                    <Text style={estilos.txt}>Ingredientes</Text>
                    <TextInput style={estilos.input} onChangeText={(texto) => {setIngredientes(texto)}}/>

                    <Text style={estilos.txt}>Modo de preparo</Text>
                    <TextInput style={estilos.input} onChangeText={(texto) => {setPreparo(texto)}}/>

                    <Text style={estilos.txt}>Tempo de preparo - minutos</Text>
                    <TextInput style={estilos.input} onChangeText={(texto) => {setTempo(texto)}} keyboardType="numeric"/>

                    <TouchableOpacity style={estilos.botao} onPress={ async () => {
                        const receita = await criarReceita(titulo, ingredientes, preparo, tempo);

                        if(receita.status === 'sucess'){
                            Alert.alert('', receita.msg);

                        }else{
                            Alert.alert('', receita.msg);
                        }
                    }}>
                        <Text style={estilos.txtBotao}>Salvar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilos.link} onPress={() => {navigation.navigate("Home")}}>Voltar</TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TelaReceita;