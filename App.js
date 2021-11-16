import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

// Import react native paper
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

//importar stack navigator
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Pantallas
import Inicio from './components/pantallas/Inicio';
import NuevoCliente from './components/pantallas/NuevoCliente';
import DetallesCliente from './components/pantallas/DetallesCliente';

// Importar barra superior
import Barra from './components/UI/Barra';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  roundess: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1774f2",
    accent: '#0655bf'
  }
}

const App = () => {
  return (  
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Inicio'
            screenOptions={{
              headerStyle: {
                backgroundColor: theme.colors.primary
              },
              headerTintColor: theme.colors.surface,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          >
            <Stack.Screen
              name='Inicio'
              component={ Inicio }
              options={({ navigation, route }) => ({
                //headerLeft: (props) => <Barra { ...props } navigation={navigation} route={route} />
              })}
            />

            <Stack.Screen
              name='NuevoCliente'
              component={NuevoCliente}
              options={{ title: 'Nuevo Cliente'}}
            />

            <Stack.Screen
              name='DetallesCliente'
              component={ DetallesCliente }
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'cornflowerblue'
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

})

export default App;

//Comments how to add vector icons
/*
  Video 144 
  android/app/build.grade 
  add apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
*/