import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

const Barra = ({ navigation, route }) => {

    const handlePress = () => {
        navigation.navigate('NuevoCliente')
    }

    return (  
        <>
            <View>
                <Button
                    color="#FFF"
                    style={ styles.buttonStyle }
                    onPress={ () => handlePress()}
                    icon="plus"
                >
                    Nuevo
                    
                    {/*<Icon name="pluscircleo" size={20} color="#FFF" style={{ paddingLeft: 10}} />*/}
                </Button>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#03045e',
        borderRadius: 10,
        marginLeft: 5
    }
})

export default Barra;