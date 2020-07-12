import React from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import DATA from '../data/testData'
import { connect } from "react-redux";
import { getCity } from "../redux/selectors";
import { addCity } from "../redux/actions/post";

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const VirtualizedListExample = (props) => {

	const {
		onGetCity,
		onAddCity
  } = props

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === onGetCity ? "green" : "#0b2673";

    return (
      <Item
        item={item}
        onPress={() => onAddCity(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={onGetCity}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0
	},
	item: {
		margin: 2
	},
	title: {
		fontSize: 20,
		color: '#fff',
		textAlign: "center"
	}
});

const mapStateToProps = (state) => {
  return {
    onGetCity: getCity(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddCity: (title) => dispatch(addCity(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VirtualizedListExample)