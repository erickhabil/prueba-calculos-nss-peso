/**
 * @description Clase principal y global de la app
 * @author rick.Hernandez
 * @version 1.0 - 28-04-2020
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavegacionApp from './src/navegaciones/NavegacionApp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={NavegacionApp} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )

};

export default App;
