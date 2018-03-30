import { connect } from 'react-redux'
import { initSmart, fetchSmartQuery, fetchSmartCreate } from '../actions'
import SmartWrapper from '../components/SmartWrapper'

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    smart: state.smart,
    query: state.namespace[ownProps.namespace] ? state.namespace[ownProps.namespace].query : {},
    isFetching: state.namespace[ownProps.namespace] ? state.namespace[ownProps.namespace].isFetching : false,
    data: state.namespace[ownProps.namespace] ? state.namespace[ownProps.namespace].data : {}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initSmart: () => {
      dispatch(initSmart())
    },
    onQuery: (smart, query) => {
      dispatch(fetchSmartQuery(smart, query, ownProps.namespace))
    },
    onCreate: (smart, entry) => {
      dispatch(fetchSmartCreate(smart, entry, ownProps.namespace))
    }
  }
}

const Smart = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartWrapper)

export default Smart