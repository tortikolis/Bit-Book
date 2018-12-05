const loginInitState = {
  loginName: "",
  loginPassword: "",
  errorMsg: ""
}

export const loginReducer = (state = loginInitState, action) => {
  switch(action.type){
    case 'SET_USERNAME_PASSWORD':
      return {
        ...state,
        [action.field]: action.payload
      };

    case 'RESET_LOGIN': 
      return loginInitState;

    case 'SET_ERROR':
      return {
        ...state,
        errorMsg: action.err
      }

    default:
      return state;
  }
}