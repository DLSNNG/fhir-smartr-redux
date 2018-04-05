import React, {Component} from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import {SmartQuery, Smart, ResourceList, configureStore} from '../../src'

// Init store
const store = configureStore();

// Define Patient Teaser component
class PatientTeaserView extends Component {
  render() {
    const patient = this.props.resource;
    const name = patient.name[0];
    const displayName = name.family + ', ' + name.given[0];
    return (
      <span className="patient-teaser-view">{displayName}</span>
    )
  }
}

// Define Demo component
class Demo extends Component {
  render() {
    return (
      <div className="demo">
        <SmartQuery namespace="arbitrarynamespace" query={{ type: 'Patient' }} 
          client={{ serviceUrl: 'https://sb-fhir-dstu2.smarthealthit.org/api/smartdstu2/open', patientId: 'SMART-1137192' }} />
        <Smart namespace="arbitrarynamespace">
          <ResourceList emptyMessage="Sorry it doesnt look like there are any items to display">
            <PatientTeaserView />
          </ResourceList>
        </Smart>
      </div>
    )
  }
}


// Render demo
render(
  <Provider store={store}>
    <Demo />
  </Provider>, 
  document.querySelector('#demo')
)
