import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    tela:{
        width: '100%',
        height: '100%',
    },

    appbarLogin:{
        width: "100%",
        alignItems: "flex-end",
        marginTop: 40,
    },

    navbarLogo:{
        width: 130,
        height: 30,
    },

    container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },

    txt:{
        fontFamily: 'Roboto',
        fontSize: 26,
        color: '#FF2D00',
        fontWeight: 'bold',
    },

    txtEnunciado:{
        fontFamily: 'Roboto',
        fontSize: 15,
        color: '#FF2D00',
        padding: 10,
    },

    input:{
        width: 280,
        height: 40,
        
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#FF2D00',
        backgroundColor: '#FFF',

        padding: 10,
        marginTop: 20,
    },

    botao:{
        width: 280,
        height: 45,
        
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#FF2D00',
        backgroundColor: '#FF2D00',

        marginTop: 20,
        alignItems: 'center',
    },

    txtBotao:{
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 12,
        
    },

});

export default estilos;