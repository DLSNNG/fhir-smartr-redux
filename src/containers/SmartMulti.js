import { connect } from 'react-redux'
import SmartWrapper from '../components/SmartWrapper'

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const namespaces = ownProps.namespaces;
  let smart = {};
  namespaces.forEach((namespace) => {
    smart[namespace] = {
      query: state.smart[namespace] ? state.smart[namespace].query : {},
      isFetching: state.smart[namespace] ? state.smart[namespace].isFetching : false,
      data: state.smart[namespace] ? state.smart[namespace].data : {}
    }
  })
  return smart;
}

const SmartMulti = connect(
  mapStateToProps
)(SmartWrapper)

export default SmartMulti