import { connect } from 'react-redux'
import { fetchTestQuery } from '../actions'
import SmartQueryWrapper from '../components/SmartQueryWrapper'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => {
      dispatch(fetchTestQuery(ownProps.query, ownProps.namespace))
    }
  }
}

const SmartDevQuery = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartQueryWrapper)

export default SmartDevQuery