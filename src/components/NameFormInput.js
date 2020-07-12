import React from 'react';
import { Hoshi } from 'react-native-textinput-effects';
import { StyleSheet, Text } from 'react-native';
import { getName, getNameIsValidValue} from '../redux/selectors';
import { addName } from '../redux/actions/post';
import { connect } from 'react-redux';

const NameFormInput = (props) => {

  const {
    onGetName,
    onAddName,
    isValid
  } = props

  const addNameFromInputValue = (value) => onAddName(value)
  
  return (
    <>
      <Hoshi
      style={styles.nameHitoshiStyle}
      borderColor={'#757575'} 
      borderHeight={1} 
      label={'name'} 
      inputPadding={16}
      value={onGetName}
      onChangeText={addNameFromInputValue}>
      </Hoshi>
      <Text style={ isValid ? styles.errorTextHidden : styles.errorTextVisible }>This field is required</Text>
    </>
  )
}

const styles = StyleSheet.create({
  nameHitoshiStyle: {
    marginBottom: 10
  },
  errorTextHidden: {
    display: 'none'
  },
  errorTextVisible: {
    display: 'flex',
    color: 'red',
    fontSize: 15
  }
});

const mapStateToProps = (state) => {
  return {
    onGetName: getName(state),
    isValid: getNameIsValidValue(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddName: (value) => dispatch(addName(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameFormInput)