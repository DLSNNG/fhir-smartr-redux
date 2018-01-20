import React from 'react'
import PropTypes from 'prop-types'

const SmartDataWrapper = ({ query, isFetching, data, children }) => {
  return (
    React.Children.map(children, child => {
        return React.cloneElement(child, {
          query: query,
          isFetching: isFetching,
          data: data
        })
    })
  )
}

SmartDataWrapper.propTypes = {
  data: PropTypes.object
}

export default SmartDataWrapper