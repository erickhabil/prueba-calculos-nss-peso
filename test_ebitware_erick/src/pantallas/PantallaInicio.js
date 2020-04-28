/**
 * @description Clase de Pantalla Inicial de la app
 * @author erick.hernandez
 * @version 1.0 - 28-04-2020
 */

/* SE REALIZAN IMPORTACIONES DE COMPONENTES */
import React, { useEffect, useState } from 'react';

import {
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import { SkypeIndicator, } from 'react-native-indicators';
import LinearGradient from 'react-native-linear-gradient';

/**
* @description Funcion principal de la pantalla inicial de la app
* @author erick.Hernandez
* @version 1.0 - 28-04-2020
*/
function PantallaInicio({ navigation }) {

    /* AQUI SE COLOCAN TODAS LAS FUNCIONES QUE SE EJECUTARAN DURANTE EL CICLO DE VIDA DE ESTA CLASE (HOOKS) */
    const [cargando, setCargando] = useState(false);

    /**
     * @description Funcion que se ejecuta cuando antes que se monten los componentes
     * @author erick.hernandez
     * @version 1.0 - 28-04-2020
     */
    useEffect(() => {
        setTimeout(() => {
            setCargando(true);
        }, 3000)
    }, [])


    /* SE RENDERIZAN COMPONENTES Y ELEMENTOS */

    if (cargando === false) {
        return (
            <SkypeIndicator
                color={'blue'}
                size={80}
                minScale={0.2}
                maxScale={1.0}
                count={4}

            />
        );
    } else {
        return (
            <View>
                <Text>Hola Mundo!</Text>
            </View>
        );

    }


}

PantallaInicio.propTypes = {
    navigation: PropTypes.any,
};

/* SE EXPORTA LA CLASE CON EL NOMBRE TAL CUAL ESTA DEFINIDO EN LA FUNCION PRINCIPAL DE LA CLASE */
export default PantallaInicio;