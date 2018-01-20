import React from 'react'
import PropTypes from 'prop-types'

const SmartQueryWrapper = ({ onLoad }) => {
  onLoad()
  return false
}

SmartQueryWrapper.propTypes = {
  onLoad: PropTypes.func.isRequired
}

export default SmartQueryWrapper