import { combineReducers } from 'redux'
import dynamic from './dynamic'
import smart from './smart'
import namespace from './namespace'

const rootReducer = combineReducers({
  dynamic,
  smart,
  namespace
})

export default rootReducer