/**
 * @description Hoja de estilos de pantalla inicial
 * @author erick.Hernandez
 * @version 1.0 - 28-04-2020
 */

/** SE REALIZAN IMPORTACIONES DE COMPONENTES */
import * as Colores from '../utilerias/UtileriaColores';
import {
    responsiveFontSize as fz,
} from 'react-native-responsive-dimensions';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

/** SE DECLARAN ESTILOS, CARACTERISTICAS Y PROPIEDADES */
export default {
    contenedorPrincipalClaro: {
        width: wp('100%'),
        height: hp('100%'),
        alignItems: 'center',
        paddingTop: hp('5%'),
        backgroundColor: 'white',
    },
    formularioContenedor: {
        width: wp('85%'),
        backgroundColor: Colores.blancoFondo,
    },
    botonSubmit: {
        width: wp('85%'),
        height: hp('8%'),
        backgroundColor: 'red',
        marginTop: hp('5%'),
        borderRadius: 50,
        justifyContent: 'center',
    },
    textoBotomSubmit: {
        fontSize: fz(3),
    },
    textoError: {
        fontSize: fz(2),
        color: 'red',
        textAlign: 'center'
    },
};
