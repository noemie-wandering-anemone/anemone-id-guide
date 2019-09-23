import {combineReducers} from 'redux'

// import errorMessage from './error-message'
// import subreddits from './subreddits'
import filters from './filter'
import anemones from './anemones'

export default combineReducers({
  filters,
  anemones
})