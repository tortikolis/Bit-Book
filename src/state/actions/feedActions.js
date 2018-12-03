import { getAllPosts } from '../../services/postFetch';

export const buttonTypeAction = payload => {
  return {
    type: 'SET_BUTTON_TYPE',
    payload
  }
}

export const selectedPostAction = payload => {
  return {
    type: 'SET_SELECTED_POST',
    payload
  }
}

export const getPostsAction = () => {
  return (dispatch, getState) => {
    getAllPosts()
    .then( postList => {
      dispatch({ type: 'GET_POSTS', payload: postList })
    }).catch( err => {
      dispatch({type: 'GET_POSTS_ERROR', error: err})
    } )
  }
}