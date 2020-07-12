import React from 'react';
import { Hoshi } from 'react-native-textinput-effects';
import { StyleSheet, Text } from 'react-native';
import { getPassword, getPasswordIsValidValue } from '../redux/selectors';
import { addPasswor } from '../redux/actions/post';
import { connect } from 'react-redux';

const PasswordFormInput = (props) => {

  const {
    onGetPassword,
    onAddPasswor,
    isValid
  } = props

  const addPasswordFromInputValue = (value) => onAddPasswor(value)
  
  return (
    <>
      <Hoshi
      secureTextEntry
      style={styles.passwordHitoshiStyle}
      borderColor={'#757575'} 
      borderHeight={1} 
      label={'password'} 
      inputPadding={16}
      value={onGetPassword}
      onChangeText={addPasswordFromInputValue}>
      </Hoshi>
      <Text style={ isValid ? styles.errorTextHidden : styles.errorTextVisible }>Min length 7</Text>
    </>
  )
}

const styles = StyleSheet.create({
  passwordHitoshiStyle: {
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
    onGetPassword: getPassword(state),
    isValid: getPasswordIsValidValue(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddPasswor: (value) => dispatch(addPasswor(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordFormInput)