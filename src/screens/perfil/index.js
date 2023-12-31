import React, { useState, useEffect } from "react";
import { ScrollView, Text, SafeAreaView, View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { estilos } from "./estilos";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { enviarEmail } from "../../services/api/recuperarSenha/recuperarSenha";
import excluirUsuario from "../../services/api/usuario/excluirUsuario";

function TelaPerfil({ navigation }) {

  const [dados, setDados] = useState('');

  useEffect(() => {
    async function getData() {
      const resposta = await AsyncStorage.getItem('dados');
      const objeto = resposta != null ? JSON.parse(resposta) : '';

      setDados(objeto);
    }

    getData();
  }, []);

  return (
    <SafeAreaView style={estilos.tela}>
      <ScrollView style={estilos.corDeFundo}>
        <View style={[estilos.centralizar, estilos.container]}>
          <Image style={estilos.imagem} source={require("../../../assets/icons/chef_icon.png")} />
          <Text style={estilos.titulo}>Meu perfil</Text>
        </View>

        <View style={[estilos.centralizar, estilos.formulario]}>
          {dados && dados[0] && (
            <View style={estilos.containerInput}>
              <Text style={estilos.label}>Nome</Text>
              <TextInput style={estilos.input} value={dados[0].nome} editable={false} />
            </View>
          )}

          {dados && dados[0] && (
            <View style={estilos.containerInput}>
              <Text style={estilos.label}>Sobrenome</Text>
              <TextInput style={estilos.input} value={dados[0].sobrenome} editable={false} />
            </View>
          )}

          {dados && dados[0] && (
            <View style={estilos.containerInput}>
              <Text style={estilos.label}>E-mail</Text>
              <TextInput style={estilos.input} value={dados[0].email} editable={false} />
            </View>
          )}

          <TouchableOpacity style={estilos.botao} onPress={async () => {

            const resposta = await enviarEmail(dados[0].email);

            if (resposta.status === 'success') {

              Alert.alert(resposta.msg);
              navigation.navigate('RecuperarSenha');

            } else {
              Alert.alert(resposta.msg);
            }

          }}>
            <Text style={estilos.txtBotao}>Alterar senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.botao} onPress={() => {
            Alert.alert('Cuidado!', 'Você está prestes a excluir sua conta. Essa ação não pode ser revertida!', [
              {
                text: "Cancelar"
              },

              {
                text: "Estou ciente!",
                onPress: async () => {

                  const resposta = await excluirUsuario(dados[0].id, dados[1]);

                  if (resposta.status === 'success') {
                    Alert.alert(resposta.msg);
                    navigation.navigate('Inicial')
                  } else {
                    Alert.alert(resposta.msg);
                  }

                },
                style: "cancel"
              }
            ])
          }}>
            <Text style={estilos.txtBotao}>Excluir conta</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            navigation.navigate("Home")
          }}>
            <Text style={estilos.link}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TelaPerfil;
