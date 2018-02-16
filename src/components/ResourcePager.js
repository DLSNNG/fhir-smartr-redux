import React from 'react'
import PropTypes from 'prop-types'

const ResourcePager = ({ query, isFetching, data, onSubmit, children }) => {
  
  // Still searching
  if(isFetching) {
    return false;
  }
  // No results
  const response = data;
  const request = query;
  
  const perPage = ((request || {}).query || {})._count || 1;
  const total = ((response || {}).data || {}).total || 0;
  const numPages = total/perPage;
  const currentOffset = ((request || {}).query || {})._getpagesoffset || 0;
  const nextResultsCount = total - currentOffset;
  const startNum = currentOffset + 1;
  const endNum = (currentOffset + perPage) < total ? (currentOffset + perPage) : total;
  
  // TODO: refine logic and add conditional rendering of buttons
  
  if(total ===0) {
    return false;
  }
  
  console.log(nextResultsCount);
  
  const leftButton = currentOffset > 0 ? 
    <button className="pull-left col-xs-2 previous-page-button" onClick={e => {
      e.preventDefault;
      request.query._getpagesoffset = (request.query._getpagesoffset || perPage) - perPage;
      request.query._lastUpdated = { $lt: response.data.meta.lastUpdated };
      onSubmit(request);
    }}><i className="fa fa-chevron-left"></i></button> : false;
  
  const rightButton = nextResultsCount > perPage ? 
    <button className="pull-right col-xs-2 next-page-button" onClick={e => {
        e.preventDefault;
        request.query._getpagesoffset = (request.query._getpagesoffset || 0) + perPage;
        request.query._lastUpdated = { $lt: response.data.meta.lastUpdated };
        onSubmit(request);
      }}><i className="fa fa-chevron-right"></i></button> : false;
      
  const display = <span>Showing Results {startNum} to {endNum} of {total}</span> 
      
  return (
    <div className="resource-pager col-md-12 text-center">
      {leftButton}
      {display}
      {rightButton}
    </div>
  )
  
}

ResourcePager.propTypes = {
  query: PropTypes.object,
  isFetching: PropTypes.bool,
  data: PropTypes.object,
  onSubmit: PropTypes.function
}

export default ResourcePager