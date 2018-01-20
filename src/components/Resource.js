import React from 'react'
import PropTypes from 'prop-types'

const Resource = ({ query, isFetching, data, emptyMessage, children }) => {
  
  // Still searching
  if(isFetching) {
    return <div className="resource-loader">Loading...</div>
  }
  // No results
  const response = data;
  const resource = (response || {}).data;
  if(!resource) { 
    return <div className="resource-empty-message">{emptyMessage ? emptyMessage : "No Resource Found"}</div>
  }
  // Has results
  return (
    React.Children.map(children, child => {
        return React.cloneElement(child, {
          resource: resource
        })
    })
  )
}

Resource.propTypes = {
  isFetching: PropTypes.bool,
  data: PropTypes.object,
  emptyMessage: PropTypes.string
}

export default Resource