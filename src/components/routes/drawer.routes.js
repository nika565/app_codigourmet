import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import TelaLogin from "../../screens/login";
import TelaCadastro from "../../screens/cadastro";
import TelaHome from "../../screens/home";
import TelaPerfil from "../../screens/perfil";
import TelaReceita from "../../screens/receita";
import TelaInicial from "../../screens/inicial";
import TelaEnviarEmail from "../../screens/enviarEmail";
import TelaRecuperarSenha from "../../screens/recuperarSenha";

const Drawer = createDrawerNavigator();

function DrawerRoute(){
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Inicial" screenOptions={ { drawerStyle: { backgroundColor: "#F85836" }, headerTransparent: true, title: '', drawerItemStyle: { borderBottomWidth: 2, borderColor: "#F8836A", }, drawerActiveBackgroundColor: "#F8836A", drawerLabelStyle: { color: "#FFFFFF", fontWeight: "bold" } } }>
                <Drawer.Screen name="Home" component={TelaHome} options={ { drawerLabel: "Início" } } />
                <Drawer.Screen name="Perfil" component={TelaPerfil} options={ { drawerLabel: "Perfil" } } />
                <Drawer.Screen name="Receita" component={TelaReceita} options={ { drawerItemStyle: { display: "none" } } } />
                <Drawer.Screen name="Cadastro" component={TelaCadastro} options={ { headerShown: false, drawerItemStyle: { display: "none" } } } />
                <Drawer.Screen name="Login" component={TelaLogin} options={ { headerShown: false, drawerLabel: "Sair" } } />
                <Drawer.Screen name="Inicial" component={TelaInicial} options={{ headerShown: false, drawerItemStyle: {display: "none"}}}/>
                <Drawer.Screen name="EnviarEmail" component={TelaEnviarEmail} options={{ headerShown: false, drawerItemStyle: {display: "none"}}}/>
                <Drawer.Screen name="RecuperarSenha" component={TelaRecuperarSenha} options={{ headerShown: false, drawerItemStyle: {display: "none"}}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerRoute;