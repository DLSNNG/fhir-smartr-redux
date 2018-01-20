import { requestSmartQuery } from '../actions'

const smart = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_SMART_QUERY':
      let queryRequestState = Object.assign({}, state);
      queryRequestState[action.namespace] = {
        query: action.query,
        isFetching: true
      }
      return queryRequestState;
    case 'RECEIVE_SMART_QUERY':
      let queryResponseState = Object.assign({}, state);
      queryResponseState[action.namespace] = {
        query: action.query,
        isFetching: false,
        data: action.json
      }
      return queryResponseState;
    default:
      return state
  }
}

export default smart