import { connect } from 'react-redux'
import { initSmart, fetchSmartPatientQuery } from '../actions'
import SmartQueryWrapper from '../components/SmartQueryWrapper'

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    smart: state.smart
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initSmart: () => {
      dispatch(initSmart())
    },
    onLoad: (smart) => {
      dispatch(fetchSmartPatientQuery(smart, ownProps.query, ownProps.namespace))
    }
  }
}

const SmartPatientQuery = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartQueryWrapper)

export default SmartPatientQuery