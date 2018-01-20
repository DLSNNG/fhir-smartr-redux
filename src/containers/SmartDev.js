import { connect } from 'react-redux'
import { fetchTestQuery } from '../actions'
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
      dispatch(fetchTestQuery(query, ownProps.namespace))
    }
  }
}

const SmartDev = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartWrapper)

export default SmartDev