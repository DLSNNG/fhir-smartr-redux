const namespace = (state = {}, action) => {
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
    case 'REQUEST_SMART_CREATE':
      let createRequestState = Object.assign({}, state);
      createRequestState[action.namespace] = {
        query: action.query,
        isFetching: true
      }
      return createRequestState;
    case 'RECEIVE_SMART_CREATE':
      let createResponseState = Object.assign({}, state);
      createResponseState[action.namespace] = {
        query: action.query,
        isFetching: false,
        data: action.json
      }
      return createResponseState;
    case 'REQUEST_SMART_PATIENT_QUERY':
      let patientRequestState = Object.assign({}, state);
      patientRequestState[action.namespace] = {
        query: action.query,
        isFetching: true
      }
      return patientRequestState;
    case 'RECEIVE_SMART_PATIENT_QUERY':
      let patientResponseState = Object.assign({}, state);
      patientResponseState[action.namespace] = {
        query: action.query,
        isFetching: false,
        data: action.json
      }
      return patientResponseState;
    default:
      return state
  }
}

export default namespace