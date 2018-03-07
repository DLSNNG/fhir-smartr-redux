import React from 'react'
import PropTypes from 'prop-types'

const SmartQueryWrapper = ({ smart, initSmart, onLoad }) => {
  if(smart.api) {
    onLoad(smart)  
  }
  else if(!smart.init) {
    initSmart()
  }
  return false
}

SmartQueryWrapper.propTypes = {
  smart: PropTypes.object,
  initSmart: PropTypes.func.isRequired,
  onLoad: PropTypes.func.isRequired
}

export default SmartQueryWrapper