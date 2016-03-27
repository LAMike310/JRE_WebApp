import { combineReducers } from 'redux'
import videoReducer from './videoReducer'
// import filterReducer from './filterList'

const rootReducer = combineReducers({
  videos: videoReducer
})

export default rootReducer
