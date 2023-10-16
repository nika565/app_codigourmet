import 'react-native-gesture-handler';
import React from 'react';
import TelaLogin from './src/screens/login';
import TelaCadastro from './src/screens/cadastro';
import TelaHome from './src/screens/home';
import TelaPerfil from './src/screens/perfil';
import TelaReceita from './src/screens/receita';

import DrawerRoute from './src/components/routes/drawer.routes';

function App(){
  return (
    <DrawerRoute />
  );
}

export default App;