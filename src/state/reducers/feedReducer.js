const feedInitState = {
  posts: [],
  buttonType: null,
  selectedOption: null,
}

export const feedReducer = (state = feedInitState, action) => {
  switch(action.type){
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

     default: 
      return state;
  } 
}
