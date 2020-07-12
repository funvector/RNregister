import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import RegisterHeader from './src/screens/RegisterHeader';
import store from './src/redux/index'

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}> 
        <RegisterHeader />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000e',
    flex: 1
  }
});

export default App;