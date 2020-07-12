import { ADD_NAME, ADD_PASSWORD, ADD_EMAIL, ADD_CHECKBOXVALUE, ADD_DATEVALUE, ADD_CITYVALUE } from '../types'

const ainitialState = {
  user: {
    date: '',
    title: null,
    email: '',
    password: '',
    name: '',
    nameIsValid: false,
    emailIsValid: false, 
    passwordIsValid: false,
    checkBoxIsValid: false
  }
}

export const postReducer = (state = ainitialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return (
      (action.payload.name.trim() !== '') ? 
        {...state, user: {...state.user, ...action.payload, nameIsValid: true}} :
        {...state, user: {...state.user, ...action.payload, nameIsValid: false}}
      );
      case ADD_DATEVALUE:
      return (
        {...state, user: {...state.user, ...action.payload}}
      );
      case ADD_CITYVALUE:
      return (
        {...state, user: {...state.user, ...action.payload}}
      );
      case ADD_CHECKBOXVALUE:
      return (
        {...state, user: {...state.user, checkBoxIsValid: !state.user.checkBoxIsValid}}
      );
    case ADD_EMAIL:
      return (
      (/^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i.test(action.payload.email.trim())) ? 
        {...state, user: {...state.user, ...action.payload, emailIsValid: true}} :
        {...state, user: {...state.user, ...action.payload, emailIsValid: false}}
      );
    case ADD_PASSWORD:
      return (
      (action.payload.password.trim().length > 7 && (!action.payload.password.includes(' ') && action.payload.password !== '')) ? 
        {...state, user: {...state.user, ...action.payload, passwordIsValid: true}} :
        {...state, user: {...state.user, ...action.payload, passwordIsValid: false}}
      );
    default:
    return state;
  }
}