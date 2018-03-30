import React from 'react'
import PropTypes from 'prop-types'

const SmartWrapper = ({ smart, initSmart, query, isFetching, data, onQuery, onCreate, children }) => {
  if(!(smart || {}).api && !(smart || {}).init) {
    initSmart()
  }
  return (
    React.Children.map(children, child => {
        return React.cloneElement(child, {
          query: query,
          isFetching: isFetching,
          data: data,
          onQuery: (query) => {
            onQuery(smart, query)
          },
          onCreate: (entry) => {
            onCreate(smart, entry)
          }
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