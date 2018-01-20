import { connect } from 'react-redux'
import { fetchDynamic } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(fetchDynamic(ownProps.query, ownProps.namespace))
    }
  }
}

const DynamicQueryLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default DynamicQueryLink