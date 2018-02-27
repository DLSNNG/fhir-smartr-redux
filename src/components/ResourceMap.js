import React from 'react'
import PropTypes from 'prop-types'

const ResourceMap = ({ query, isFetching, data, loadingComponent, emptyMessage, mapFunction, children }) => {
  
  // Still searching
  if(isFetching) {
    const LoadingComponent = loadingComponent;
    return loadingComponent ? <LoadingComponent /> : <div className="resource-list-loader">Loading...</div>
  }
  // No results
  const response = data;
  const total = ((response || {}).data || {}).total || false;
  const resources = ((response || {}).data || {}).entry;
  
  if(!total) {
    return false;
  }
  
  if(total === 0) { 
    return <div className="resource-list-empty-message">{emptyMessage ? emptyMessage : "No items to display"}</div>
  }
  // Has results
  const mappedData = resources.map(mapFunction);
  return (
    React.Children.map(children, child => {
      return React.cloneElement(child, {
        data: mappedData
      })
    })
  )
}

ResourceMap.propTypes = {
  isFetching: PropTypes.bool,
  data: PropTypes.object,
  emptyMessage: PropTypes.string,
  loadingComponent: PropTypes.component,
  mapFunction: PropTypes.func.isRequired
}

export default ResourceMap