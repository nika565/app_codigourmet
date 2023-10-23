import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    tela:{
        backgroundColor: "#FFBFB1",
        height: "100%"
    },

    corDeFundo:{
        backgroundColor: "#FFBFB1",  
    },
    
    centralizar:{
        display: "flex",
        alignItems: "center",
    },

    container:{
        marginTop: 90,
        marginBottom: 15,
    },

    titulo:{
        color: "#FF2D00",
        fontSize: 25,
        fontWeight: "bold",
    },

    imagem:{
        width: 131,
        height: 130,
    },

    formulario:{
        width: "80%",
        alignSelf: "center",
        
        backgroundColor: "#FEAF9F",

        borderRadius: 10,

        marginBottom: 90,
    },

    containerInput:{
        width: "90%",
        marginTop: 15,
    },

    label:{
        color: "#FFF",
        fontWeight: "bold",

        marginLeft: 10,
        marginBottom: 5,
    },

    input:{
        height: 40,
        padding: 10,
        
        borderRadius: 20,
        borderWidth: 2,

        borderColor: "#FF2D00",
        color: "#FF2D00",
        backgroundColor: "#FFF",
    },

    botao:{
        width: "90%",
        height: 40,

        marginTop: 10,

        backgroundColor: "#FF2D00",

        borderRadius: 20,

        justifyContent: "center",
        alignItems: "center",
    },

    txtBotao:{
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 15
    },

    link:{
        fontWeight: "bold",
        fontSize: 15,

        margin: 20,

        color: "#F9441E",
    }
})