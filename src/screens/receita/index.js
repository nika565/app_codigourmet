import React from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import { estilos } from "./estilos";

export default function TelaReceita( { route, navigation } ){
    
    const { nome, ingredientes, preparo, tempo } = route.params
    
    return(
        <SafeAreaView style={ [ estilos.tela, estilos.cor ] } >
            <ScrollView style={estilos.cor} endFillColor="#F8836A">
            <View style={estilos.appHeader}>
                        <Image style={estilos.headerLogo} source={require("../../../assets/logo/navbarLogo.png")} />
                    </View>
                <View>
                    <Text style={estilos.titulo}>{ nome }</Text>

                    <View style={estilos.container}>
                        <Text style={estilos.subtitulo}>Ingredientes</Text>
                        <Text style={estilos.paragrafo}>{ ingredientes }</Text>
                    
                        <Text style={estilos.subtitulo}>Tempo de preparo</Text>
                        <Text style={estilos.paragrafo}>{ tempo }</Text>

                        <Text style={estilos.subtitulo}>Modo de preparo</Text>
                        <Text style={estilos.paragrafo}>{ preparo }</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}