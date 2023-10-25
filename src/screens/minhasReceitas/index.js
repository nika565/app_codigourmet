import React from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, Image} from "react-native";


import estilos from "./estilo";

function TelaMinhasReceitas ({ navigation }){

    const imagePress = () => {
        navigation.navigate('CriarReceita');
    };

    return(
        <SafeAreaView style={estilos.tela}>
            <ScrollView style={estilos.tela}>
                <View style={estilos.appbarLogin}>
                    <Image style={estilos.navbarLogo} source={require("../../../assets/logo/navbarLogo.png")}></Image>
                </View>
                <View style={estilos.container}>
                    <Text style={estilos.txt}>Minhas Receitas</Text>
                </View>

                <View style={estilos.imageAdd}>
                    <TouchableOpacity onPress={imagePress}>
                        <Image style={estilos.addIcon} source={require("../../../assets/icons/botao_adicionar.png")}></Image>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
    
};

export default TelaMinhasReceitas;