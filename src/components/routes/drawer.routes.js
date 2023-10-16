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
            <Drawer.Navigator initialRouteName="Login">
                <Drawer.Screen name="Login" component={TelaLogin} options={ { headerShown: false } } />
                <Drawer.Screen name="Cadastro" component={TelaCadastro} options={ { headerShown: false } } />
                <Drawer.Screen name="Home" component={TelaHome} />
                <Drawer.Screen name="Perfil" component={TelaPerfil} />
                <Drawer.Screen name="Receita" component={TelaReceita} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerRoute;