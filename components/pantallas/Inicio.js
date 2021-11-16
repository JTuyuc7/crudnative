import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { List, Headline, Button, FAB } from 'react-native-paper';
import globalStyles from '../../styles/Global';
import axios from 'axios';

const { height } = Dimensions.get('screen');

const Inicio = ({navigation, route}) => {

    const [ users, setUsers ] = useState({});
    const [ consultar, guardarConsultar ] = useState(true);

    // Funcion para obtener los clientes
    const obtenerData = async () => {
        try {
            const data = await axios.get('http://10.0.2.2:3000/clientes');

            setUsers(data.data)

            guardarConsultar(false)
        } catch (error) {
            console.log(error, 'Unable to retrive the users')
        }
    }

    useEffect(() => {
        if( consultar ){
            obtenerData()
        }
    }, [consultar])

    return (  
        <>
            <SafeAreaView style={{ flex: 1}}>

                <Headline
                    style={ globalStyles.titulo }
                >{ users?.length === 0 ? 'Aun no hay clientes' : 'Listado Clientes'}</Headline>

                <Button
                    onPress={ () => navigation.navigate('NuevoCliente', { guardarConsultar })}
                    icon="plus-circle"
                >Nuevo Cliente</Button>
                <View style={{ height: height * 0.7 }}>
                    <FlatList
                        style={{ }}
                        data={users}
                        renderItem={ ({ item }) => (
                            <List.Item
                                title={ item.nombre }
                                description={ item.empresa }
                            />
                        )}
                        keyExtractor={ user => (user.id).toString() }
                    />
                </View>

                <FAB
                    icon="plus"
                    small={true}
                    style={ styles.fab }
                    onPress={ () => navigation.navigate('NuevoCliente', { guardarConsultar })}
                />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    fab: {
        width: 40,
        right: 10,
        position: 'absolute',
        bottom: 10,
        margin: 20
    }
})

export default Inicio;