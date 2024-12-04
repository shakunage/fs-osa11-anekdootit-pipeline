// eslint-disable-next-line no-unused-vars
const notificationReducer = (state = null, action) => {
  switch(action.type) {
  case 'SET_NOTIFICATION':
    return action.string
  case 'HIDE':
    return null
  default:
    return null
  }
}

const hide = () => {
  return ({
    type: 'HIDE'
  })
}

const show = (string) => {
  return ({
    type: 'SET_NOTIFICATION',
    string: string
  })
}

/*
export const setNotification = (string, duration) => {

    const realDuration = duration * 1000

    return dispatch => {
        dispatch(show(string))
        setTimeout( () => dispatch(hide()), realDuration )
      }
}
*/

let timeoutId

export const setNotification = (string, duration) => {

  return async dispatch => {
    dispatch(show(string))

    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      dispatch(hide())
    }, duration * 1000)
  }
}

export default notificationReducer