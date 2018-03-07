import React from 'react'
import PropTypes from 'prop-types'

const ResourceArray = ({ query, isFetching, data, loadingComponent, emptyMessage, children }) => {
  
  // Still searching
  if(isFetching) {
    const LoadingComponent = loadingComponent;
    return loadingComponent ? <LoadingComponent /> : <div className="resource-list-loader">Loading...</div>
  }
  // No results
  const response = data;
  const total = ((response || {}).data || {}).total;
  const resources = ((response || {}).data || {}).entry;
  
  if(total === 0) { 
    return <div className="resource-list-empty-message">{emptyMessage ? emptyMessage : "No items to display"}</div>
  }
  
  if(!total) {
    return false;
  }
  
  // Has results
  return (
    React.Children.map(children, child => {
      return React.cloneElement(child, {
        data: resources
      })
    })
  )
}

ResourceArray.propTypes = {
  isFetching: PropTypes.bool,
  data: PropTypes.object,
  emptyMessage: PropTypes.string,
  loadingComponent: PropTypes.component,
  mapFunction: PropTypes.func.isRequired
}

export default ResourceArray