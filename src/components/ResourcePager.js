import React from 'react'
import PropTypes from 'prop-types'

const ResourcePager = ({ query, isFetching, data, onSubmit, emptyMessage, children }) => {
  
  // Still searching
  if(isFetching) {
    return <div className="resource-list-loader">Loading...</div>
  }
  // No results
  const response = data;
  const request = query;
  
  const perPage = ((request || {}).query || {})._count || 1;
  const total = ((response || {}).data || {}).total || 0;
  const numPages = total/perPage;
  const currentOffset = ((request || {}).query || {}).__getpagesoffset;
  const nextResultsCount = total - currentOffset;
  
  // TODO: refine logic and add conditional rendering of buttons
  console.log(currentOffset);
  
  return (
    <div className="resource-pager">
      <button onClick={e => {
        e.preventDefault;
        request.query._getpagesoffset = (request.query._getpagesoffset || perPage) - perPage;
        request.query._lastUpdated = { $lt: response.data.meta.lastUpdated };
        onSubmit(request);
      }}>Previous</button>
      <button onClick={e => {
        e.preventDefault;
        request.query._getpagesoffset = (request.query._getpagesoffset || 0) + perPage;
        request.query._lastUpdated = { $lt: response.data.meta.lastUpdated };
        onSubmit(request);
      }}>Next</button>
    </div>
  )
  
}

ResourcePager.propTypes = {
  query: PropTypes.object,
  isFetching: PropTypes.bool,
  data: PropTypes.object,
  onSubmit: PropTypes.function,
  emptyMessage: PropTypes.string
}

export default ResourcePager