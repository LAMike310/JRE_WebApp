import { combineReducers } from 'redux'
import videoReducer from './videoReducer'
import featuredVideoReducer from './featuredVideoReducer'
import loadingStateReducer from './loadingStateReducer'

const rootReducer = combineReducers({
  videos: videoReducer,
  featuredVideo: featuredVideoReducer,
  isLoading: loadingStateReducer
})

export default rootReducer
