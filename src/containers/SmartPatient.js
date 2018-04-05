import { connect } from 'react-redux'
import { initSmart, fetchSmartPatientQuery } from '../actions'
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
      dispatch(initSmart(ownProps.client))
    },
    onSubmit: (smart, query) => {
      dispatch(fetchSmartPatientQuery(smart, query, ownProps.namespace))
    }
  }
}

const SmartPatient = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartWrapper)

export default SmartPatient