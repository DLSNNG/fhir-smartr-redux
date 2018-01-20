import React from 'react'
import PropTypes from 'prop-types'

const SmartWrapper = ({ query, isFetching, data, onSubmit, children }) => {
  return (
    React.Children.map(children, child => {
        return React.cloneElement(child, {
          query: query,
          isFetching: isFetching,
          data: data,
          onSubmit: onSubmit
        })
    })
  )
}

SmartWrapper.propTypes = {
  query: PropTypes.object,
  isFetching: PropTypes.bool,
  data: PropTypes.object,
  onSubmit: PropTypes.func
}

export default SmartWrapper