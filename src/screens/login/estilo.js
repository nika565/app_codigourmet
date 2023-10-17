import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    tela:{
        width: "100%",
        height: "100%",
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

    container:{
        width: "72%",
        marginTop: 70,
        alignSelf: "center",
    },

    titulo:{
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        color: "#FF2D00",

        marginBottom: 40,
    },

    input:{
        width: "100%",
        height: 40,

        padding: 10,
        marginBottom: 20,

        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#FF2D00",

        backgroundColor: "#FFFFFF",
    },

    botao:{
        width: "100%",
        height: 40,

        marginTop: 5,

        justifyContent: "center",
        alignItems: "center",

        borderRadius: 20,

        backgroundColor:"#F9441E",
    },

    txtBotao:{
        fontWeight: "bold",
        color: "#FFFFFF",
    },

    divisor:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    
    linha:{
        width: "45%",
        height: 1,
        
        backgroundColor: "#B65541",
    },

    txtDivisor:{
        color: "#B65541",
        textTransform: "uppercase",
    },

    link:{
        alignSelf: "center",
        margin: 20,
    },

    txtLink:{
        fontWeight: "bold",
        color: "#F9441E",
    }
})

export default estilos