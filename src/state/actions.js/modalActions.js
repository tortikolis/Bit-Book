export const setInputTextAction = payload => {
  return {
    type: 'SET_INPUT_TEXT_VALUE',
    payload
  }
};

export const setInputImageAction = payload => {
  return {
    type: 'SET_INPUT_IMAGE_VALUE',
    payload
  }
};

export const setInputVideoAction = payload => {
  return {
    type: 'SET_INPUT_VIDEO_VALUE',
    payload
  }
};

export const setErrorAction = payload => {
  return {
    type: 'SET_ERROR',
    payload 
  }
};

export const emptyErrorAction = () => {
  return {
    type: 'EMPTY_ERROR',
    payload: "" 
  }
};