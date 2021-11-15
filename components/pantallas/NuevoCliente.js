import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { TextInput, Headline, Button } from 'react-native-paper';

//Import global styles
import globalStyles from '../../styles/Globa';

const NuevoCliente = () => {
    return (  
        <>
            <SafeAreaView>
                <View>
                    <Headline
                        style={ globalStyles.titulo }
                    >Agregar Nuevo Cliente</Headline>
                </View>
            </SafeAreaView>
        </>
    );
}

export default NuevoCliente;