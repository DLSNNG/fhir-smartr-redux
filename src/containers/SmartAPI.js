import { connect } from 'react-redux'
import { fetchSmartQuery } from '../actions'
import SmartAPIWrapper from '../components/SmartAPIWrapper'

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    getFromNamespace: (namespace) => {
      return state.smart[ownProps.namespace] ? state.smart[ownProps.namespace].data : false;
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    queryToNamespace: (query, namespace) => {
      dispatch(fetchSmartQuery(query, namespace))
    }
  }
}

const SmartAPI = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartAPIWrapper)

export default SmartAPI