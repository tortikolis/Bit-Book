const initRegisterState = {
  successMsg: "",
  registerUsername: "",
  registerPassword: "",
  registerName: "",
  registerEmail: "",
  errorMsg: ""
}

export const registerReducer = (state=initRegisterState, action) => {
  switch(action.type){
    case 'SET_SUCCESS_MSG':
      return {
        ...state,
        successMsg: action.payload
    };
    case 'SET_REGISTER_ERROR':
      return {
        ...state, 
        errorMsg: action.err
      };
    case 'RESET_REGISTER_FORM':
      return {
        ...initRegisterState,
        successMsg: state.successMsg
      };
    case 'SET_REGISTER_FORM':
      return {
        ...state,
        [action.id]: action.value
      }
    default:
      return state;
  }
}