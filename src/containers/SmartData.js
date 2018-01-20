import { connect } from 'react-redux'
import SmartDataWrapper from '../components/SmartDataWrapper'

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
  }
}

const SmartData = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartDataWrapper)

export default SmartData