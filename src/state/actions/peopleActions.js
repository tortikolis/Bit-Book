import { getAllUsers } from '../../services/userService';

export const getAllUsersAction = () => {
  return (dispatch, getState) => {
    getAllUsers()
      .then(users => {
        dispatch({ type: 'GET_PEOPLE', payload: users})
    })
      .catch(err => {
        dispatch({type: 'GET_PEOPLE_ERROR', err
        })
      })
  }
}

export const changeSearchValueAction = payload => {
  return {
    type: 'CHANGE_SEARCH_VALUE',
    payload: payload.toLowerCase()
  }
}

