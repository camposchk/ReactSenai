import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Cadastro from './Cadastro';
import Login from './Login';
import Usuario from './Usuario';
import { UtilsContexto } from "./Context";


export default function App() {

  const Stack = createStackNavigator();

  // Estado inicial para o array de usuários
  const [usuarios, setUsuarios] = useState({usuariosArray:[]});

  return (
    <NavigationContainer>
      <UtilsContexto.Provider value={{ usuarios, setUsuarios }}>
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="Cadastro" options={{ headerShown: false }} component={Cadastro} />
          <Stack.Screen name="Usuario" options={{ headerShown: false }} component={Usuario} />
        </Stack.Navigator>
      </UtilsContexto.Provider>
    </NavigationContainer>
  );

}
