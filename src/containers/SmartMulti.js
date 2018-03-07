import { connect } from 'react-redux'
import SmartMultiWrapper from '../components/SmartMultiWrapper'

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const namespaces = ownProps.namespacesUsed;
  let smart = {};
  console.log(namespaces);
  namespaces.forEach((namespace) => {
    smart[namespace] = {
      query: state.smart[namespace] ? state.smart[namespace].query : {},
      isFetching: state.smart[namespace] ? state.smart[namespace].isFetching : false,
      data: state.smart[namespace] ? state.smart[namespace].data : {}
    }
  })
  console.log(smart);
  return { smart: smart };
}

const SmartMulti = connect(
  mapStateToProps
)(SmartMultiWrapper)

export default SmartMulti