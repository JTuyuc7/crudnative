import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

const App = () => {
  return (  
    <>
      <SafeAreaView
        style={ styles.mainContainer }
      >
        <View
          style={styles.contentContainer}
        >
          <Text>Crud Native</Text>
        </View>
      </SafeAreaView>
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