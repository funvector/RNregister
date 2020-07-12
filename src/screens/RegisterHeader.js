import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView  } from 'react-native';
import NameFormInput from '../components/NameFormInput';
import EmailFormInput from '../components/EmailFormInput';
import PasswordFormInput from '../components/PasswordFormInput';
import FormButton from '../components/FormButton';
import CheckBoxFormInput from '../components/CheckBoxForm';
import DateTimePicker from '../components/DateTimePicker';
import VirtualizedListExample from '../components/CityList';
import LoaderForm from '../components/Loader';

const RegisterHeader = (props) => {

  const [isLoading, setLoadingValue] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoadingValue(false)
    }, 3000)
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView style={{paddingVertical: 2}}>
        <View style={styles.header}>
          <Text style={styles.headerTextUpper}>registeration <Text style={styles.headerTextLower}>page</Text></Text>
        </View>
        <NameFormInput/>
        <EmailFormInput/>
        <PasswordFormInput/>
        <DateTimePicker/>
        { isLoading ? <LoaderForm/> : <VirtualizedListExample/> }
        <CheckBoxFormInput/>
        <FormButton/>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20
  },
  headerTextUpper: {
    fontSize: 25,
    color: 'orangered',
    textTransform: 'uppercase',
    alignSelf: 'center'
  },
  headerTextLower: {
    color: '#ffe2d6',
    textTransform: 'lowercase',
    fontSize: 15
  }
});

export default RegisterHeader