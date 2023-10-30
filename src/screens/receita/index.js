import React from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Alert } from "react-native";
import excluirReceita from "../../services/api/receitas/excluirReceita";
import { estilos } from "./estilos";

export default function TelaReceita( { route, navigation } ){
    
    const { local, id, nome, ingredientes, preparo, tempo } = route.params
    
    return(
        <SafeAreaView style={ [ estilos.tela, estilos.cor ] } >
            <ScrollView style={estilos.cor} endFillColor="#F8836A">
            <View style={estilos.appHeader}>
                        <Image style={estilos.headerLogo} source={require("../../../assets/logo/navbarLogo.png")} />
                    </View>
                <View>
                    <Text style={estilos.titulo}>{ nome }</Text>

                    <View style={estilos.container}>
                        {/* <Text>{ id }</Text> */}
                        <Text style={estilos.subtitulo}>Ingredientes</Text>
                        <Text style={estilos.paragrafo}>{ ingredientes }</Text>
                    
                        <Text style={estilos.subtitulo}>Tempo de preparo</Text>
                        <Text style={estilos.paragrafo}>{ tempo } minutos</Text>

                        <Text style={estilos.subtitulo}>Modo de preparo</Text>
                        <Text style={estilos.paragrafo}>{ preparo }</Text>
                        
                        <TouchableOpacity style={estilos.btn} onPress={
                            () => {
                                if(local == "minhasReceitas"){
                                    navigation.navigate("MinhasReceitas");
                                }else if(local == "home"){
                                    navigation.navigate("Home");
                                }else{
                                    navigation.navigate("Home");
                                }
                            }
                        }>
                            <Text style={estilos.titulo}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                        {/* Ação de excluir a receita */}
                        {local == "minhasReceitas" && (
                            <TouchableOpacity style={estilos.excluir} onPress={
                                async () => {
                                    const resposta = await excluirReceita(id);

                                    if(resposta.status === "success"){
                                        Alert.alert(resposta.msg);
                                        navigation.navigate("MinhasReceitas");
                                    }else{
                                        Alert.alert(resposta.msg)
                                    }

                                }
                            }><Text style={estilos.txtExcluir}>Excluir receita</Text></TouchableOpacity>
                        )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}