import { connect } from 'react-redux'
import Text from '../components/Text'

const mapStateToProps = (state, ownProps) => {
    console.log(state);
  return {
    text: state.dynamic[ownProps.namespace] ? JSON.stringify(state.dynamic[ownProps.namespace]) : ""
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const DynamicQueryChecker = connect(
  mapStateToProps,
  mapDispatchToProps
)(Text)

export default DynamicQueryChecker