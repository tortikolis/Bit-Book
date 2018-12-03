const initState = {
  posts: []
}
export const rootReducer = (state = initState, action) => {
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
     case 'SET_BUTTON_TYPE': 
     return {
       ...state,
       buttonType: action.payload
     }
     case 'SET_SELECTED_POST':
     return {
       ...state,
       selectedOption: action.payload
     }
     case 'GET_POSTS':
     return {
       ...state,
       posts: action.payload
     } 
     case 'GET_POSTS_ERROR':
     console.log('error while fetching posts:', action.error);
     return state;
    }

  return state;
}

