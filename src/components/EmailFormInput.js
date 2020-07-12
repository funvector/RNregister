import React from 'react';
import { Hoshi } from 'react-native-textinput-effects';
import { StyleSheet, Text } from 'react-native';
import { getEmail, getEmailIsValidValue } from '../redux/selectors';
import { addEmail } from '../redux/actions/post';
import { connect } from 'react-redux';

const EmailFormInput = (props) => {

  const {
    onGetEmail,
    onAddEmail,
    isValid
  } = props

  const addEmailFromInputValue = (value) => onAddEmail(value)
  
  return (
    <>
      <Hoshi
      style={styles.emailHitoshiStyle}
      borderColor={'#757575'} 
      borderHeight={1} 
      label={'email'} 
      inputPadding={16}
      value={onGetEmail}
      onChangeText={addEmailFromInputValue}>
      </Hoshi>
      <Text style={ isValid ? styles.errorTextHidden : styles.errorTextVisible }>The email syntax is wrong</Text>
    </>
  )
}

const styles = StyleSheet.create({
  emailHitoshiStyle: {
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
    onGetEmail: getEmail(state),
    isValid: getEmailIsValidValue(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddEmail: (value) => dispatch(addEmail(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailFormInput)