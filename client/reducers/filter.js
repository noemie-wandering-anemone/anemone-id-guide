  import {ADD_FILTER} from '../actions'

const initialFilters = {
    color: null
}

const filters = (state = initialFilters, action) => {
    console.log('reduce!')
    console.log(action.filter, action.value)
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