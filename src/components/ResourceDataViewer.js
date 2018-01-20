import React from 'react'
import PropTypes from 'prop-types'

const ResourceDataViewer = ({ resource }) => {
  return <span>{JSON.stringify(resource)}</span>
}

ResourceDataViewer.propTypes = {
  resource: PropTypes.object
}

export default ResourceDataViewer