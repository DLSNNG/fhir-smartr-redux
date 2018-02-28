import React from 'react'
import PropTypes from 'prop-types'

const SmartAPIWrapper = ({ getFromNamespace, queryToNamespace, children }) => {
  return (
    React.Children.map(children, child => {
        return React.cloneElement(child, {
          getFromNamespace: getFromNamespace,
          queryToNamespace: queryToNamespace
        })
    })
  )
}

SmartAPIWrapper.propTypes = {
  getFromNamespace: PropTypes.func,
  queryToNamespace: PropTypes.func
}

export default SmartAPIWrapper