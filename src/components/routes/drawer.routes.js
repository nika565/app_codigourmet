import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import TelaLogin from "../../screens/login";
import TelaCadastro from "../../screens/cadastro";
import TelaHome from "../../screens/home";
import TelaPerfil from "../../screens/perfil";
import TelaInicial from "../../screens/inicial";
import TelaEnviarEmail from "../../screens/enviarEmail";
import TelaRecuperarSenha from "../../screens/recuperarSenha";
import TelaCriarReceita from "../../screens/criarReceita";
import TelaMinhasReceitas from "../../screens/minhasReceitas";
import TelaReceita from "../../screens/receita";

const Drawer = createDrawerNavigator();

function DrawerRoute(){
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Inicial" screenOptions={ {title: "", drawerStyle: { backgroundColor: "#F85836" }, drawerItemStyle: { borderBottomWidth: 2, borderColor: "#F8836A" }, headerTransparent: true, drawerActiveBackgroundColor: "#F8836A", drawerLabelStyle: { color: "#FFFFFF", fontWeight: "bold" } } }>
                <Drawer.Screen name="Home" component={TelaHome} options={ { drawerLabel: "Home" } }/>
                <Drawer.Screen name="Perfil" component={TelaPerfil} options={ { drawerLabel: "Meu Perfil" } } />
                <Drawer.Screen name="Receita" component={TelaCriarReceita} options={{ drawerItemStyle: { display: "none" } }}/> 
                <Drawer.Screen name="Cadastro" component={TelaCadastro} options={ { headerShown: false, drawerItemStyle: { display: "none" } } } />
                <Drawer.Screen name="Inicial" component={TelaInicial} options={{ headerShown: false, drawerItemStyle: {display: "none"}}}/>
                <Drawer.Screen name="EnviarEmail" component={TelaEnviarEmail} options={{ headerShown: false, drawerItemStyle: {display: "none"}}}/>
                <Drawer.Screen name="RecuperarSenha" component={TelaRecuperarSenha} options={{ headerShown: false, drawerItemStyle: {display: "none"}}}/>
                <Drawer.Screen name="TelaReceita" component={TelaReceita} options={{ transparent: true , drawerItemStyle: {display: "none"}}}/>
                <Drawer.Screen name="CriarReceita" component={TelaCriarReceita} options={{drawerLabel: "Criar Receita" }}/>
                <Drawer.Screen name="MinhasReceitas" component={TelaMinhasReceitas} options={ { drawerLabel: "Minhas Receitas" } } /> 
                <Drawer.Screen name="Login" component={TelaLogin} options={ { headerShown: false, drawerLabel: "Sair" } } />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
// options={ { drawerItemStyle: { display: "none" } } }
export default DrawerRoute;