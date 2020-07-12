import React from 'react';
import { Button, StyleSheet, View, Alert } from 'react-native';
import { connect } from 'react-redux';

const FormButton = (props) => {

  const { 
    nameIsValid,
    emailIsValid,
    passwordIsValid,
    checkBoxIsValid,
    date,
    title,
    name,
    email,
    password
  } = props.state.postReducer.user

  let valuesFromForm = `
    Name: ${name};
    Email: ${email};
    Password: ${password};
    Date: ${date};
    City: ${title};
    CheckBox: ${checkBoxIsValid};
  `

  const sayHello = () => {
    Alert.alert(
      'The values you entered:',
      valuesFromForm,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'OK' }
      ],
      { cancelable: false }
    )
  }

  return (
    <View style={styles.buttonForm}>
      <Button disabled={
        (nameIsValid && emailIsValid && passwordIsValid && checkBoxIsValid && date && title) ?
        false : true
      } 
      onPress={sayHello} title={'REGISTER'}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonForm: {
    marginTop: 40,
    marginBottom: 40
  }
});

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(FormButton)