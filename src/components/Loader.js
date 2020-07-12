import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const LoaderForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Just wait a second...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 170,
    marginTop: 30,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#a1a1a1'
  },
	text: {
		fontSize: 20,
		color: 'orangered',
		textAlign: "center"
	}
});

export default LoaderForm