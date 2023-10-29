import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    tela:{
        height: "100%",
    },

    cor:{
        backgroundColor: "#F8836A",
    },

    container:{
        width: "80%",
        height: 40,
        
        flexDirection: "row",
        alignSelf: "center",
        
        marginTop: 100,
        marginBottom: 20,
    },

    busca:{
        width: "80%",
        
        backgroundColor: "#FFF",

        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        
        borderWidth: 2,
        borderColor: "#FF2D00",

        padding: 10,
    },

    btnBusca:{
        backgroundColor: "#F9441E",
        width: "20%",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,

        alignItems: "center",
        justifyContent: "center",

    },

    imgBusca:{
        width: 30,
        height: 30,

        marginRight: 5,
    },

    lista: {
        flex: 1
    },

    cardReceita:{
        flexDirection: "row",
        backgroundColor: "#F85836",
        width: "90%",
        alignSelf: "center",
        marginBottom: 25,
        borderRadius: 10,
    },

    fundoImg:{
        backgroundColor: "#FEAF9F",
        width: 100,
        height: 100,

        alignItems: "center",
        justifyContent: "center",

        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },

    imgReceita:{
        width: 70,
        height: 70,
    },

    receitaInfo:{
        justifyContent: "center",
        marginLeft: 10,
    },

    titulo:{
        fontWeight: "bold",
        fontSize: 18,
        color: "#FFFF",
    },

    subtitulo:{
        color: "#FFFF"
    },

})