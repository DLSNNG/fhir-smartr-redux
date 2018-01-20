import React, {Component} from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import {SmartDevQuery, SmartDev, ResourceList, configureStore} from 'fhir-smartr-redux'

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
        <SmartDevQuery namespace="arbitrarynamespace" query={{ type: 'Patient' }} />
        <SmartDev namespace="arbitrarynamespace">
          <ResourceList emptyMessage="Sorry it doesnt look like there are any items to display">
            <PatientTeaserView />
          </ResourceList>
        </SmartDev>
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
