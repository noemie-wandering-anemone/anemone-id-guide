  import {ADD_FILTER} from '../actions'

const initialFilters = {
  color: 'red',
  location: 'South Pacific'
}

const filters = (state = initialFilters, action) => {
    switch (action.type) {
      case ADD_FILTER:
        return {
            ...state,
            [action.filter]: action.value
        }
  
      default:
        return state
    }
  }

  export default filters