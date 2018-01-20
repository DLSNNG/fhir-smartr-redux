# fhir-smartr-redux

[![NPM](https://nodei.co/npm/<fhir-smartr-redux>.png)](https://npmjs.org/package/fhir-smartr-redux)

A set of React components that help tie the SMART on FHIR js library to a Redux store.

See example on plunker: [https://plnkr.co/edit/OrbOuy9WcqXaSBckuStB](https://plnkr.co/edit/OrbOuy9WcqXaSBckuStB?p=preview)

## Installation
### Node
```
npm install --save fhir-smartr-redux
```

### In the Browser (UMD)
```html
<head>
  <!--Load dependencies -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
  <script src="https://cdn.rawgit.com/smart-on-fhir/client-js/v0.1.8/dist/fhir-client.js"></script>
  <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
  <!-- Load fhir-smartr -->
  <script src="https://unpkg.com/fhir-smartr-redux/umd/fhir-smartr-redux.min.js"></script>
</head>
```

## Usage
### Define a Resource component with React
```javascript
class PatientResource extends Component {
  
  render() {
    // FHIR resources will be passed in as props.resource
    const patient = this.props.resource;
    const name = patient.name[0];
    const address = patient.address[0];
    return(
      <div>
        <h2>{ name.given[0] + ' ' + name.family }</h2>
        <div>{ address.line[0] }</div>
      </div>
    )
  }
  
}
```

### Perform a Query
```javascript
  <SmartQuery namespace="arbitraryname" query={{ type: 'Patient', id:'099e7de7-c952-40e2-9b4e-0face78c9d80' }} />
```
Results of the query will be saved in the Redux store under the provided namespace.
If an id is included in the query, a single resource will be returned. 
Otherwise a bundle of resources will be returned.

### Display a FHIR Resource
```javascript
  <Smart namespace="arbitraryname">
    <Resource>
      <PatientResource />
    </Resource>
  </Smart>
```
The Smart component will pass any data stored in the provided namespace to its child component.
The Resource component will then use that data to pass a FHIR resource as props.resource to it's child component.

### Display a list of FHIR Resources
```javascript
  <Smart namespace="multipleresultshere">
    <ResourceList>
      <PatientResource />
    </ResourceList>
  </Smart>
```
Similar to displaying a single FHIR resource, except ResourceList expects a Bundle and creates a list of the child components.

### Create a Search Form
```javascript
class PatientSearchForm extends Component {
  
  render() {
    let input;
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            let query = { type: 'Patient', query: { given: input.value.trim() } }
            this.props.onSubmit(query)
          }}
        >
          <input
            ref={node => {
              input = node
            }}
          />
          <button type="submit">
            Search by Last Name
          </button>
        </form>
      </div>
    )
  }
}
```
The Smart component will pass an onSubmit(query) function to its children as child.props.onSubmit. Use this to initiate queries in response to user actions, such as within search forms.

### Putting it all together
```javascript
  import React, { Component } from 'react'
  import { render } from 'react-dom'
  import { Provider } from 'react-redux'
  import { Smart, SmartQuery, ResourceList, configureStore } from 'fhir-smartr-redux'
  
  // Init the Redux store
  const store = configureStore();
  
  // Define a Patient search form component with React
  class PatientSearchForm extends Component {
    
    render() {
      let input;
      return (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault()
              if (!input.value.trim()) {
                return
              }
              let query = { type: 'Patient', query: { given: input.value.trim() } }
              this.props.onSubmit(query)
            }}
          >
            <input
              ref={node => {
                input = node
              }}
            />
            <button type="submit">
              Search by Last Name
            </button>
          </form>
        </div>
      )
    }
  }
  
  // Define a Patient Resource with React
  class PatientResource extends Component {
    
    render() {
      // The results of your Smart query will be passed as props.resource to this component
      const patient = this.props.resource;
      if(!patient) {
        return <div>{JSON.stringify(this.props)}</div>
      }
      const name = patient.name[0];
      const address = patient.address[0];
      return(
        <div>
          <div>{name.given + ' ' + name.family}</div>
        </div>
      )
    }
    
  }
  
  // Then use the Resource and Search components in the application
  class App extends Component {
    render() {
      return (
        <div>
          <SmartQuery namespace="testing" query={{ type: 'Patient' }} />
          <Smart namespace="testing">
            <PatientSearchForm />
          </Smart>
          <Smart namespace="testing">
            <ResourceList>
              <PatientResource />
            </ResourceList>
          </Smart>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
