import { connect } from 'react-redux'
import { fetchSmartQuery } from '../actions'
import SmartQueryWrapper from '../components/SmartQueryWrapper'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => {
      dispatch(fetchSmartQuery(ownProps.query, ownProps.namespace))
    }
  }
}

const SmartQuery = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartQueryWrapper)

export default SmartQuery