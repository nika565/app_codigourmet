import { StyleSheet } from "react-native";



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

    tela:{
        width: '100%',
        height:'100%',
        backgroundColor: '#F8836A',
    },

    container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },

    txt:{
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#552C23',
        marginBottom: 20,
    },

    imageAdd:{
        width: "100%",
        alignItems: "flex-end",
        marginTop: 40,
        padding: 30,
    },

    addIcon:{
        width: 50,
        height: 50,
        marginTop: 560,
    },

    // Estilização dos cards da receita

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

});

export default estilos;