import { combineReducers } from 'redux'
import networks from './networks'
import stations from './stations'
import likes from './likes'

export default combineReducers({
  networks,
  stations,
  likes
})