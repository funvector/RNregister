import {ADD_NAME, ADD_PASSWORD, ADD_EMAIL, ADD_CHECKBOXVALUE, ADD_DATEVALUE, ADD_CITYVALUE} from '../types'

export const addName = (name) => {
  return {
    type: ADD_NAME,
    payload: { name }
  }
}

export const addEmail = (email) => {
  return {
    type: ADD_EMAIL,
    payload: { email }
  }
}

export const addPasswor = (password) => {
  return {
    type: ADD_PASSWORD,
    payload: { password }
  }
}

export const addDate = (date) => {
  return {
    type: ADD_DATEVALUE,
    payload: { date }
  }
}

export const addCity = (title) => {
  return {
    type: ADD_CITYVALUE,
    payload: { title }
  }
}

export const addCheckBoxValue = () => {
  return {
    type: ADD_CHECKBOXVALUE
  }
}