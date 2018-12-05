

export const setSuccessMsgAction = () => {
  return {
    type: 'SET_SUCCESS_MSG',
    payload: "Your registration was successfull!"
  }
} 

export const setRegisterErrorAction = err => {
  return {
    type: 'SET_REGISTER_ERROR',
    err
  }
}

export const resetRegisterFormAction = () => {
  return {
    type: 'RESET_REGISTER_FORM',
  }
}

export const setRegisterFormAction = (id, value) => {
  return {
    type: 'SET_REGISTER_FORM',
    id,
    value
  }
}