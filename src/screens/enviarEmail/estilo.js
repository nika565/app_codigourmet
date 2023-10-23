import { StyleSheet } from "react-native";


const estilos = StyleSheet.create({
    tela:{
        width: '100%',
        height: '100%',
    },

    appbarLogin:{
        width: "100%",
        alignItems: "flex-end",
        marginTop: 30,
    },

    navbarLogo:{
        width: 130,
        height: 30,
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },

    texto: {
        color: '#FF2D00',
        fontFamily: 'Roboto',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 100,
    },

    textoEnunciado: {
        color: '#FF2D00',
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 40,
    },

    input: {
        width: 280,
        height: 40,

        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#FF2D00',
        backgroundColor: '#FFF',

        marginTop: 20,
        padding: 10,
    },

    botao: {
        width: 280,
        height: 40,

        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#FF2D00',
        backgroundColor: '#FF2D00',

        marginTop: 20,
        padding: 10,
    },

    txtBotao:{
        color: '#FFF',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 15,
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: -1,
    },

    link: {
        color: '#F9441E',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10,
    }
    
});

export default estilos;