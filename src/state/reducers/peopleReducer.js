const initialPeopleState = {
  users: [],
  searchValue: ''
}

export const peopleReducer = (state=initialPeopleState, action) => {
  switch(action.type){
    case 'GET_PEOPLE':
      return {
        ...state,
        users: action.payload
      }
    case 'GET_PEOPLE_ERROR': 
      console.log(action.err)
      return state;
    case 'CHANGE_SEARCH_VALUE': 
      return {
        ...state,
        searchValue: action.payload
      }
    default:
      return state;
  }
}