import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text, Image, ActivityIndicator, FlatList, Alert } from "react-native";
import estilos from "./estilo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import minhasReceitas from "../../services/api/minhasReceitas/minhasReceitas";

function TelaMinhasReceitas({ navigation }) {

    const [dados, setDados] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function getData() {
            
            const dadosReceitas = await minhasReceitas();
            if (dadosReceitas.status === 'error') {
                Alert.alert(dadosReceitas.msg)
            } else {

                if (dadosReceitas.dados.length === 0) {
                    Alert.alert('Você não tem nenhuma receita cadastrada.', 'Por favor cadastre uma receita!');
                    navigation.navigate('CriarReceita');
                } else {
                    setDados(dadosReceitas.dados);
                    setCarregando(false);
                }
            }
        }

        getData();
    }, []);

    return (
        <SafeAreaView style={estilos.tela}>
            <ScrollView style={estilos.tela}>
                <View style={estilos.appbarLogin}>
                    <Image style={estilos.navbarLogo} source={require("../../../assets/logo/navbarLogo.png")}></Image>
                </View>

                <View style={estilos.container}>
                    <Text style={estilos.txt}>Minhas Receitas</Text>
                </View>

                {carregando ? ( // Exibir uma mensagem de carregamento enquanto os dados estão sendo buscados
                    <ActivityIndicator size="large" color="#FF2D00" />
                ) : (

                    <View>
                        <FlatList
                            data={dados}
                            keyExtractor={(item) => item._id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={estilos.cardReceita} onPress={
                                    () => {
                                        console.log(item)
                                        navigation.navigate("TelaReceita", {
                                            local: "minhasReceitas",
                                            id: item._id,
                                            nome: item.nome,
                                            ingredientes: item.ingredientes,
                                            preparo: item.modoPreparo,
                                            tempo: item.tempo,
                                        }); 
                                    }}>

                                    <View style={estilos.fundoImg}>
                                        <Image style={estilos.imgReceita} source={require('../../../assets/icons/cozinha.png')} />
                                    </View>

                                    <View style={estilos.receitaInfo}>
                                        <Text style={estilos.titulo}>{item.nome}</Text>
                                        <Text style={estilos.subtitulo}>{item.tempo} minutos</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                )}
            </ScrollView>
        </SafeAreaView>
    );

};

export default TelaMinhasReceitas;