import React from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions, Alert } from 'react-native';
import { Headline, Text, Subheading, Button, FAB } from 'react-native-paper';
import globalStyles from '../../styles/Global';
import axios from 'axios';

const { width } = Dimensions.get('screen')

const DetallesCliente = ({ navigation, route  }) => {

    const { id, nombre, empresa, correo, telefono } = route?.params?.item;
    const { guardarConsultar } = route.params;

    const eliminarCliente = async (id) => {
        try {
            await axios.delete(`http://10.0.2.2:3000/clientes/${id}`);
        } catch (error) {
            console.log(error, 'Unable to delete the user')
        }        
        // Redirigir a la pagina Principal
        navigation.navigate('Inicio');

        // Hacer la consulta de nuevo
        guardarConsultar(true)

    }

    const mostrarAlerta = (id) => {
        Alert.alert(
            'Atencion',
            'Una vez eliminado, no se podra restaurar',
            [
                {text: 'Si, Eliminar', onPress: () => eliminarCliente(id)},
                {text: 'Cancelar', style: 'cancel'}
            ]
        )
    }

    return (  
        <>
            <SafeAreaView
                style={{ flex: 1 }}
            >
                <View style={ styles.contenedor }>
                    <Headline
                        style={ globalStyles.titulo }
                    >{nombre}</Headline>

                    <Text style={ styles.texto }>Empresa: <Subheading>{empresa}</Subheading></Text>

                    <Text style={ styles.texto }>Correo: <Subheading>{correo}</Subheading></Text>

                    <Text style={ styles.texto }>Telefono: <Subheading>{telefono}</Subheading></Text>
                </View>

                <View
                    style={ styles.deleteContainer }
                >
                    <Button
                        icon="delete"
                        style={ styles.button }
                        mode="contained"
                        onPress={ () => mostrarAlerta(id) }
                    >Eliminar Cliente</Button>
                </View>
                
                <FAB
                    style={ styles.fab }
                    icon="pencil"
                    onPress={ () => navigation.navigate('NuevoCliente', { cliente: route?.params?.item, guardarConsultar })}
                />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        paddingHorizontal: 15
    },
    texto: {
        marginBottom: 20,
        fontSize: 19
    },
    button: {
        width: width * 0.8,
        borderRadius: 10,
        backgroundColor: 'red'
    },
    deleteContainer: {
        justifyContent: 'center', 
        flexDirection: 'column', 
        alignItems: 'center',
        marginTop: 30
    },
    fab: {
        //width: 40,
        right: 10,
        position: 'absolute',
        bottom: 10,
        margin: 20
    }
})

export default DetallesCliente;