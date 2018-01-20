import { combineReducers } from 'redux'
import dynamic from './dynamic'
import smart from './smart'

const rootReducer = combineReducers({
  dynamic,
  smart
})

export default rootReducer