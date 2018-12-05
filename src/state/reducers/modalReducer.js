const modalInitState = {
  inputTextValue: "",
  inputImageValue: "",
  inputVideoValue: "",
  errorMessage: ""
}

export const modalReducer = (state = modalInitState, action) => {
  switch( action.type ){
    case 'SET_INPUT_TEXT_VALUE': 
    return {
      ...state,
      inputTextValue: action.payload
    };
    case 'SET_INPUT_IMAGE_VALUE': 
    return {
      ...state,
      inputImageValue: action.payload
    };
    case 'SET_INPUT_VIDEO_VALUE': 
    return {
      ...state,
      inputVideoValue: action.payload
    };
    case 'CLEAR_POSTS_DATA':
    return {
      ...state,
      inputImageValue: action.payload,
      inputTextValue: action.payload,
      inputVideoValue: action.payload
    }
    case 'SET_ERROR':
    return {
      ...state,
      errorMessage: action.payload
    }
    case 'EMPTY_ERROR':
    return {
      ...state,
      errorMessage: action.payload
    }
    default:
      return state;
  }
}