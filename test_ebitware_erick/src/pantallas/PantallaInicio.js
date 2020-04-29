/* eslint-disable react-native/no-raw-text */
/**
 * @description Clase de Pantalla Inicial de la app
 * @author erick.hernandez
 * @version 1.0 - 28-04-2020
 */

/* SE REALIZAN IMPORTACIONES DE COMPONENTES */
import React, { useEffect, useState } from 'react';
import { View, Text, Form, Item, Label, Input, Picker, Button } from 'native-base';
import PropTypes from 'prop-types';
import { SkypeIndicator, } from 'react-native-indicators';
import estilos from '../estilos/EstiloPantallaInicio';
import { gris } from '../utilerias/UtileriaColores';
import { useFormik } from 'formik';

/**
* @description Funcion principal de la pantalla inicial de la app
* @author erick.Hernandez
* @version 1.0 - 28-04-2020
*/
function PantallaInicio({ navigation }) {

    /* AQUI SE COLOCAN TODAS LAS FUNCIONES QUE SE EJECUTARAN DURANTE EL CICLO DE VIDA DE ESTA CLASE (HOOKS) */
    const [cargando, setCargando] = useState(false);
    const [estaDeshabilitado, setEstaDeshabilitado] = useState(false);
    const hombre = 'hombre';
    const mujer = 'mujer';
    const { values, setFieldValue, handleSubmit, errors } = useFormik({
        initialValues: {
            nombre: '',
            edad: '',
            nss: '',
            sexo: hombre,
            peso: '',
            altura: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validate: values => {
            const errors = {};

            if (!values.nombre) {
                errors.nombre = 'Este campo es requerido';
                setEstaDeshabilitado(true);
            } else {
                // setEstaDeshabilitado(false);
            }


            if (!values.edad) {
                errors.edad = 'Este campo es requerido';
                setEstaDeshabilitado(true);
            } else {
                // setEstaDeshabilitado(false);
            }

            if (!values.nss) {
                errors.nss = 'Este campo es requerido';
                setEstaDeshabilitado(true);
            } else {
                // setEstaDeshabilitado(false);
            }

            if (!values.peso) {
                errors.peso = 'Este campo es requerido';
                setEstaDeshabilitado(true);
            } else {
                // setEstaDeshabilitado(false);
            }

            if (!values.altura) {
                errors.altura = 'Este campo es requerido';
                setEstaDeshabilitado(true);
            } else {
                // setEstaDeshabilitado(false);
            }

            if (values.nombre && values.edad && values.nss && values.peso && values.altura) {
                setEstaDeshabilitado(false);
            }

                return errors;
        }
    });

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
                color={gris}
                size={80}
                minScale={0.2}
                maxScale={1.0}
                count={4}

            />
        );
    } else {
        return (
            <View style={estilos.contenedorPrincipalClaro}>
                <Form style={estilos.formularioContenedor}>
                    <Item error={errors.nombre ? true : false}>
                        <Label>Nombre</Label>
                        <Input value={values.nombre} onChangeText={text => setFieldValue('nombre', text)} />
                    </Item>
                    <Text style={estilos.textoError}>{errors.nombre ? errors.nombre : ''}</Text>
                    <Item error={errors.edad ? true : false}>
                        <Label>Edad (Años)</Label>
                        <Input value={values.edad} onChangeText={text => setFieldValue('edad', text)} />
                    </Item>
                    <Text style={estilos.textoError}>{errors.edad ? errors.edad : ''}</Text>
                    <Item error={errors.nss ? true : false}>
                        <Label>No. Seguro Social</Label>
                        <Input value={values.nss} onChangeText={text => setFieldValue('nss', text)} />
                    </Item>
                    <Text style={estilos.textoError}>{errors.nss ? errors.nss : ''}</Text>
                    <Item>
                        <Label>Sexo</Label>
                        <Picker
                            onValueChange={value => setFieldValue('sexo', value)}
                            selectedValue={values.sexo}
                        >
                            <Picker.Item label='Hombre' value={hombre} />
                            <Picker.Item label='Mujer' value={mujer} />
                        </Picker>
                    </Item>
                    <Text style={estilos.textoError}>{errors.sexo ? errors.sexo : ''}</Text>
                    <Item error={errors.peso ? true : false}>
                        <Label>Peso (Kg)</Label>
                        <Input value={values.peso} onChangeText={text => setFieldValue('peso', text)} />
                    </Item>
                    <Text style={estilos.textoError}>{errors.peso ? errors.peso : ''}</Text>
                    <Item error={errors.peso ? true : false}>
                        <Label>Altura (Mts)</Label>
                        <Input value={values.altura} onChangeText={text => setFieldValue('altura', text)} />
                    </Item>
                    <Text style={estilos.textoError}>{errors.altura ? errors.altura : ''}</Text>
                </Form>
                <Button
                    onPress={handleSubmit} style={estilos.botonSubmit}
                    disabled={estaDeshabilitado}
                >
                    <Text style={estilos.textoBotomSubmit}>Enviar</Text>
                </Button>
            </View>
        );

    }


}

PantallaInicio.propTypes = {
    navigation: PropTypes.any,
};

/* SE EXPORTA LA CLASE CON EL NOMBRE TAL CUAL ESTA DEFINIDO EN LA FUNCION PRINCIPAL DE LA CLASE */
export default PantallaInicio;