import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Alert } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import axios from 'axios';

//Import global styles
import globalStyles from '../../styles/Global';

const NuevoCliente = ({ navigation, route }) => {

    const { guardarConsultar } = route.params;

    // State para los campos
    const [ nombre, setNombre ] = useState('');
    const [ telefono, setTelefono ] = useState('');
    const [ correo, setCorreo ] = useState('');
    const [ empresa, setEmpresa ] = useState('');
    const [ error, setError ] = useState(false)

    const agregarDatos = async () => {

        // Validar que los campos no esten vacios
        if( nombre.trim() === '' || telefono.trim() === '' || correo.trim() === '' || empresa.trim() === ''){
            //mostrarAlerta();
            setError(true)
            return;
        }

        const usuario = { nombre, telefono, correo, empresa }

        // Agregar a la API el nuevo usuario
        try {
            // para Android
            await axios.post('http://10.0.2.2:3000/clientes', usuario );

            // Para IOS
            // await axios.post('http://localhost:3000/clieten', usuario)

            // IF user saves correctly redirect to the main page 
            navigation.navigate('Inicio')

            

        } catch (error) {
            console.log(error, 'Unable to save user')
        }

        // resetear el form
        setNombre('');
        setTelefono('');
        setCorreo('');
        setEmpresa('');

        // Refresh to bring the new data from the API
        guardarConsultar(true)
    }

    return (  
        <>
            <SafeAreaView style={{ flex: 1}}>
                <View style={ globalStyles.contenedor}>
                    <Headline
                        style={ globalStyles.titulo }
                    >Agregar Nuevo Cliente</Headline>

                    <TextInput
                        label="Nombre"
                        mode='flat'
                        style={ styles.input}
                        onChangeText={ (nombre) => setNombre(nombre)}
                        value={nombre}
                    />

                    <TextInput
                        label="Telefono"
                        keyboardType='numeric'
                        mode='flat'
                        style={ styles.input}
                        onChangeText={ (telefono) => setTelefono(telefono) }
                        value={telefono}
                    />

                    <TextInput
                        label="Correo"
                        keyboardType='email-address'
                        mode='flat'
                        style={ styles.input }
                        onChangeText={ (correo) => setCorreo(correo)}
                        value={ correo }
                    />

                    <TextInput
                        label="Empresa"
                        keyboardType="default"
                        style={ styles.input}
                        onChangeText={ (empresa) => setEmpresa(empresa)}
                        value={ empresa }
                    />
                    
                    <Button
                        icon="pencil-circle"
                        mode="contained"
                        onPress={ () => agregarDatos()}
                        //style={ styles.button}
                        //color="#FFF"
                    >
                        Guardar
                    </Button>

                        <Portal>
                            <Dialog
                                visible={error}
                                onDismiss={ () => setError(false)}
                            >
                                <Dialog.Title>Error</Dialog.Title>
                                <Dialog.Content>
                                    <Paragraph>Todos los campos son obligatorios</Paragraph>
                                </Dialog.Content>

                                <Dialog.Actions>
                                    <Button
                                        color="#000"
                                        onPress={ () => setError(false) }
                                    >OK</Button>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 15,
        backgroundColor: 'transparent'
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 15,
        color: "#FFF",
        fontWeight: 'bold',
        marginTop: 30,
        height: 40
    }
})

export default NuevoCliente;