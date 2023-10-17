import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import TelaLogin from "../../screens/login";
import TelaCadastro from "../../screens/cadastro";
import TelaHome from "../../screens/home";
import TelaPerfil from "../../screens/perfil";
import TelaReceita from "../../screens/receita";

const Drawer = createDrawerNavigator();

function DrawerRoute(){
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Login" screenOptions={ { drawerStyle: { backgroundColor: "#F85836" }, drawerItemStyle: { borderBottomWidth: 1, } } }>
                <Drawer.Screen name="Home" component={TelaHome} />
                <Drawer.Screen name="Perfil" component={TelaPerfil} />
                <Drawer.Screen name="Receita" component={TelaReceita} options={ { drawerItemStyle: { display: "none" } } } />
                <Drawer.Screen name="Cadastro" component={TelaCadastro} options={ { headerShown: false, drawerItemStyle: { display: "none" } } } />
                <Drawer.Screen name="Login" component={TelaLogin} options={ { headerShown: false, drawerLabel: "Sair" } } />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerRoute;