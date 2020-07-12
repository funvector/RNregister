import React from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet } from 'react-native'
import DatePicker from 'react-native-datepicker'
import { getDate } from '../redux/selectors'
import { addDate } from '../redux/actions/post'

const DateTimePicker = (props) => {

  const {
    onGetDate,
    onAddDate
  } = props

  return (
    <View>
        <DatePicker
          style={styles.dateComponent}
          format="DD/MM/YYYY"
          date={onGetDate}
          onDateChange={onAddDate}
        />
      <Text style={ onGetDate ? styles.errorTextHidden : styles.errorTextVisible }>This field is required</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  dateComponent: {
    width: 350,
    alignSelf: 'center',
    marginTop: 40
  },
  errorTextHidden: {
    display: 'none'
  },
  errorTextVisible: {
    display: 'flex',
    color: 'red',
    fontSize: 15,
    marginTop: 10
  }
});

const mapStateToProps = (state) => {
  return {
    onGetDate: getDate(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddDate: (value) => dispatch(addDate(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateTimePicker)