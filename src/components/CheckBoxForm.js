import React from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { getCheckBoxIsValidValue } from "../redux/selectors";
import { addCheckBoxValue } from "../redux/actions/post";

const CheckBoxFormInput = (props) => {

  const {
    isValid,
    onChangeCheckBoxValue
  } = props

  return (
    <View style={styles.container}>
      <CheckBox
        value={isValid}
        onValueChange={onChangeCheckBoxValue}
      />
      <Text style={ isValid ? styles.Validlabel : styles.inValidlabel }>Clicked</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40
  },
  Validlabel: {
    fontSize: 15,
    color: 'green'
  },
  inValidlabel: {
    fontSize: 15,
    color: 'red'
  }
});

const mapStateToProps = (state) => {
  return {
    isValid: getCheckBoxIsValidValue(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCheckBoxValue: (value) => dispatch(addCheckBoxValue(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxFormInput)