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

    tela:{
        width: '100%',
        height:'100%',
        backgroundColor: '#F8836A',
    },

    container:{
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#F8836A',
        width: "80%",
    },

    txt:{
        fontFamily: 'Roboto',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFF',
        marginLeft: 15,
        marginTop: 20,

    },

    input1:{
      width: "100%",
      height: 40,

      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#FF2D00',
      backgroundColor: '#FFF',

      marginTop: 10,
      padding: 10,
    },

    input2:{
        width: "100%",
        height: 170,
  
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#FF2D00',
        backgroundColor: '#FFF',

        marginTop: 10,
        padding: 10,
      },

      botao:{
        width: "100%",
        height: 40,

        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#FF2D00',
        backgroundColor: '#F9441E',

        marginTop: 30,
        alignItems: 'center',

      },

      txtBotao:{
        fontFamily: 'Roboto',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 7,
      },

      containerLink:{
        alignItems: 'center',
      },

      link:{
        fontFamily: 'Roboto',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#552C23',
        margin: 10,
      }
});

export default estilos;