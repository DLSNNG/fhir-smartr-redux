import { connect } from 'react-redux'
import { initSmart, fetchSmartQuery } from '../actions'
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
      dispatch(initSmart(ownProps.client))
    },
    onLoad: (smart) => {
      dispatch(fetchSmartQuery(smart, ownProps.query, ownProps.namespace))
    }
  }
}

const SmartQuery = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartQueryWrapper)

export default SmartQuery