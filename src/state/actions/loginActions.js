
export const setUsenameAndPasswordAction = (payload, field) => {
  return {
    type: 'SET_USERNAME_PASSWORD',
    payload,
    field
  }
}

export const resetLoginFormAction = () => {
  return {
    type: 'RESET_LOGIN'
  }
}

export const setErrorMsgAction = err => {
  return {
    type: 'SET_ERROR',
    err
  }
}