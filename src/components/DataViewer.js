import React from 'react'
import PropTypes from 'prop-types'

const DataViewer = ({ query, isFetching, data }) => {
  console.log("query");
  console.log(query);
  console.log("isFetching");
  console.log(isFetching);
  if(isFetching) {
    return <span>Loading...</span>
  }
  else {
    return (
      <span>{JSON.stringify(data)}</span>
    )
  }
}

DataViewer.propTypes = {
  data: PropTypes.object
}

export default DataViewer