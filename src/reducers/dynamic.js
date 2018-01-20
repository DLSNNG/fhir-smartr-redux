import { requestDynamic } from '../actions'

const dynamic = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_DYNAMIC':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'RECEIVE_DYNAMIC':
      let newState = Object.assign({}, state, {
        isFetching: false,
      });
      newState[action.namespace] = action.json;
      return newState;
    default:
      return state
  }
}

export default dynamic