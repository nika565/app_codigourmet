import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create(
    {
        appHeader:{
            width: "100%",
            alignItems: "flex-end",
            marginTop: 40,
        },

        headerLogo:{
            width: 130,
            height: 30,
        },

        cor:{
            backgroundColor: "#F8836A",
        },

        tela:{
            height: "100%",
            width: "100%",
        },

        container:{
            width: "85%",
            backgroundColor: "#F85836",
            alignSelf: "center",
            padding: 20,
            paddingTop: 5,
            borderRadius: 20,
        },

        titulo:{
            textAlign: "center",
            fontSize: 20,
            color: "#552C23",
            fontWeight: "bold",
            marginBottom: 10,
            marginTop: 20,
        },

        paragrafo:{
            color:"#FFFF"
        },

        subtitulo:{
            color: "#703C31",
            fontWeight: "bold",
            marginTop: 15,
        },

        btn:{
            marginTop: 10,
        },

        excluir:{
            alignSelf: "center",
            backgroundColor: "red",
            width: "85%",
            height: 50,
            borderRadius: 20,
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
        },

        txtExcluir:{
            fontSize: 17,
            color: "#FFFF",
            fontWeight: "bold",
        }
    }
 )