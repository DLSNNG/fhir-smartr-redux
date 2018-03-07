import React from 'react'
import PropTypes from 'prop-types'

const ResourceArray = ({ query, isFetching, data, loadingComponent, emptyComponent, children }) => {
  
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
    const EmptyComponent = emptyComponent;
    return emptyComponent ? <EmptyComponent /> : <div className="resource-list-empty-message">No items to display</div>
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
  emptyComponent: PropTypes.component,
  loadingComponent: PropTypes.component,
  mapFunction: PropTypes.func.isRequired
}

export default ResourceArray