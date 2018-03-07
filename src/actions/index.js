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

export const requestInitSmart = () => {
  return {
    type: 'REQUEST_INIT_SMART',
    startedAt: Date.now(),
  }
}

export const receiveInitSmart = (smart) => {
  return {
    type: 'RECEIVE_INIT_SMART',
    smart: smart,
    startedAt: Date.now(),
  }
}

export const requestSmartQuery = (smart, query, namespace) => {
  return {
    type: 'REQUEST_SMART_QUERY',
    query,
    namespace,
    startedAt: Date.now(),
  }
}

export const receiveSmartQuery = (smart, query, namespace, json) => {
  return {
    type: 'RECEIVE_SMART_QUERY',
    query,
    namespace,
    json,
    startedAt: Date.now(),
  }
}

export const requestSmartPatientQuery = (smart, query, namespace) => {
  return {
    type: 'REQUEST_SMART_PATIENT_QUERY',
    query,
    namespace,
    startedAt: Date.now(),
  }
}

export const receiveSmartPatientQuery = (smart, query, namespace, json) => {
  return {
    type: 'RECEIVE_SMART_PATIENT_QUERY',
    query,
    namespace,
    json,
    startedAt: Date.now(),
  }
}

export function initSmart(query, namespace) {
  return dispatch => {
    dispatch(requestInitSmart())
    FHIR.oauth2.ready(function(smart) {
      dispatch(receiveInitSmart(smart))
    });
  }
}


export function fetchSmartQuery(smart, query, namespace) {
  return dispatch => {
    dispatch(requestSmartQuery(smart, query, namespace))
    if(query.id) {
      smart.api.read(query).done(json => {
        dispatch(receiveSmartQuery(smart, query, namespace, json))
      })
    }
    else {
      smart.api.search(query).done(json => {
        dispatch(receiveSmartQuery(smart, query, namespace, json))
      })
    }
  }
}

export function fetchSmartPatientQuery(smart, query, namespace) {
  return dispatch => {
    dispatch(requestSmartPatientQuery(smart, query, namespace))
    if(query.id || query.type == "Patient") {
      smart.patient.api.read(query).done(json => {
        dispatch(receiveSmartQuery(smart, query, namespace, json))
      })
    }
    else {
      smart.patient.api.search(query).done(json => {
        dispatch(receiveSmartPatientQuery(smart, query, namespace, json))
      })
    }
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