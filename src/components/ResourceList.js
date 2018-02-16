import React from 'react'
import PropTypes from 'prop-types'

const ResourceList = ({ query, isFetching, data, emptyMessage, children }) => {
  
  // Still searching
  if(isFetching) {
    return <div className="resource-list-loader">Loading...</div>
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
  return (
    <ul className="resource-list"> 
      {resources.map((item) => {
        const resource = item.resource;
        return (
          <li className={resource.resourceType + "-resource-item"} key={item.resource.id}>
            {React.Children.map(children, child => {
                return React.cloneElement(child, {
                  resource: resource
                })
            })}
          </li>
        )
      })}
    </ul>
  )
}

ResourceList.propTypes = {
  isFetching: PropTypes.bool,
  data: PropTypes.object,
  emptyMessage: PropTypes.string
}

export default ResourceList