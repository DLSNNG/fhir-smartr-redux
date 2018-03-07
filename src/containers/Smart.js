import { connect } from 'react-redux'
import { initSmart, fetchSmartQuery } from '../actions'
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
    onSubmit: (smart, query) => {
      dispatch(fetchSmartQuery(smart, query, ownProps.namespace))
    }
  }
}

const Smart = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartWrapper)

export default Smart