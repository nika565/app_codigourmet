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

    // addReceita:{
    //     backgroundColor: "#F9441E",
    //     width: 70,
    //     height: 70,
    //     alignItems: "center",
    //     borderRadius: 40,
    //     position: "fixed",
    //     bottom: 0,
    //     right: 0,
    //     zIndex: 1,
    // },

    // teste:{
    //     height: 2000,
    // }
})