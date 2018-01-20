import React from 'react'
import PropTypes from 'prop-types'

const ResourceDataView = ({ resource }) => {
  return <span>{JSON.stringify(resource)}</span>
}

ResourceDataView.propTypes = {
  resource: PropTypes.object
}

export default ResourceDataView