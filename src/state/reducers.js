
export const rootReducer = (state = {}, action) => {
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
  }

  return state;
}

