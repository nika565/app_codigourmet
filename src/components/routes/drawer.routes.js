import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import TelaLogin from "../../screens/login";
import TelaCadastro from "../../screens/cadastro";
import TelaHome from "../../screens/home";
import TelaPerfil from "../../screens/perfil";
// import TelaReceita from "../../screens/receita";
import TelaInicial from "../../screens/inicial";
import TelaEnviarEmail from "../../screens/enviarEmail";
import TelaRecuperarSenha from "../../screens/recuperarSenha";
import TelaCriarReceita from "../../screens/criarReceita";
import TelaMinhasReceitas from "../../screens/minhasReceitas";

const Drawer = createDrawerNavigator();

function DrawerRoute(){
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Inicial" screenOptions={ {title: "", drawerStyle: { backgroundColor: "#F85836" }, drawerItemStyle: { borderBottomWidth: 2, borderColor: "#F8836A" }, headerTransparent: true, drawerActiveBackgroundColor: "#F8836A", drawerLabelStyle: { color: "#FFFFFF", fontWeight: "bold" } } }>
                <Drawer.Screen name="Home" component={TelaHome} />
                <Drawer.Screen name="Perfil" component={TelaPerfil} />
                <Drawer.Screen name="Receita" component={TelaCriarReceita}/> 
                <Drawer.Screen name="Cadastro" component={TelaCadastro} options={ { headerShown: false, drawerItemStyle: { display: "none" } } } />
                <Drawer.Screen name="Login" component={TelaLogin} options={ { headerShown: false, drawerLabel: "Sair" } } />
                <Drawer.Screen name="Inicial" component={TelaInicial} options={{ headerShown: false, drawerItemStyle: {display: "none"}}}/>
                <Drawer.Screen name="EnviarEmail" component={TelaEnviarEmail} options={{ headerShown: false, drawerItemStyle: {display: "none"}}}/>
                <Drawer.Screen name="RecuperarSenha" component={TelaRecuperarSenha} options={{ headerShown: false, drawerItemStyle: {display: "none"}}}/>
                <Drawer.Screen name="CriarReceita" component={TelaCriarReceita} options={{ headerShown: false, drawerItemStyle: {display: "none"}}}/>
                <Drawer.Screen name="MinhasReceitas" component={TelaMinhasReceitas}/> 
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
// options={ { drawerItemStyle: { display: "none" } } }
export default DrawerRoute;