/**
 * @description Navegacion de la app
 * @author erick.hernandez
 * @version 1.0 - 28-04-2020
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaInicio from '../pantallas/PantallaInicio';

const Stack = createStackNavigator();

const NavegacionApp = () => {
    return (
        <Stack.Navigator
            initialRouteName="Inicio"
            headerMode="none"
        >
            <Stack.Screen
                name="Inicio"
                component={PantallaInicio}
                options={{
                    title: 'Inicio',
                }}
            />
        </Stack.Navigator>
    );
}

export default NavegacionApp;