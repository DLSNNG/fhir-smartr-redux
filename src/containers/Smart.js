import { connect } from 'react-redux'
import { fetchSmartQuery } from '../actions'
import SmartWrapper from '../components/SmartWrapper'

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    query: state.smart[ownProps.namespace] ? state.smart[ownProps.namespace].query : {},
    isFetching: state.smart[ownProps.namespace] ? state.smart[ownProps.namespace].isFetching : false,
    data: state.smart[ownProps.namespace] ? state.smart[ownProps.namespace].data : {}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (query) => {
      dispatch(fetchSmartQuery(query, ownProps.namespace))
    }
  }
}

const Smart = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartWrapper)

export default Smart