/*global fetch*/
/*global FHIR*/

export const requestDynamic = (url, params, namespace) => {
  return {
    type: 'REQUEST_DYNAMIC',
    url,
    params,
    namespace,
    startedAt: Date.now(),
  }
}

export const receiveDynamic = (url, params, namespace, json) => {
  return {
    type: 'RECEIVE_DYNAMIC',
    url,
    params,
    namespace,
    json,
    startedAt: Date.now(),
  }
}

export function fetchDynamic(url, params, namespace) {
  return dispatch => {
    dispatch(requestDynamic(url, params, namespace))
    return fetch(url, params)
        .then(response => response.json())
        .then(json => dispatch(receiveDynamic(url, params, namespace, json)))
  }
}

export const requestSmartQuery = (query, namespace) => {
  return {
    type: 'REQUEST_SMART_QUERY',
    query,
    namespace,
    startedAt: Date.now(),
  }
}

export const receiveSmartQuery = (query, namespace, json) => {
  return {
    type: 'RECEIVE_SMART_QUERY',
    query,
    namespace,
    json,
    startedAt: Date.now(),
  }
}

export function fetchSmartQuery(query, namespace) {
  return dispatch => {
    dispatch(requestSmartQuery(query, namespace))
    FHIR.oauth2.ready(function(smart) {
      if(query.id) {
        smart.api.read(query).done(json => {
          dispatch(receiveSmartQuery(query, namespace, json))
        })
      }
      else {
        smart.api.search(query).done(json => {
          dispatch(receiveSmartQuery(query, namespace, json))
        })
      }
    });
  }
}

export function fetchTestQuery(query, namespace) {
  return dispatch => {
    dispatch(requestSmartQuery(query, namespace))
    let smart = FHIR.client({
      serviceUrl: 'https://sb-fhir-dstu2.smarthealthit.org/api/smartdstu2/open',
      patientId: 'SMART-1137192'
    });
    console.log(smart);
    if(query.id) {
      smart.api.read(query).done(json => {
        dispatch(receiveSmartQuery(query, namespace, json))
      })
    }
    else {
      smart.api.search(query).done(json => {
        dispatch(receiveSmartQuery(query, namespace, json))
      })
    }
  }
}