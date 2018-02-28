import React from 'react'
import PropTypes from 'prop-types'

const SmartMultiWrapper = ({ smart, children }) => {
  return (
    React.Children.map(children, child => {
        return React.cloneElement(child, {
          smart: smart
        })
    })
  )
}

SmartMultiWrapper.propTypes = {
  smart: PropTypes.object,
}

export default SmartMultiWrapper