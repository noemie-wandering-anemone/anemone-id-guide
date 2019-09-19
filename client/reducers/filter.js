  import {ADD_FILTER} from '../actions'

const initialFilters = 0

const filters = (state = initialFilters, action) => {
    console.log('reduce!')
    console.log(action.filter, action.value)
    switch (action.type) {
      case ADD_FILTER:
        return {
            num: 2
            // ...state.filters,
            // [action.filter]: action.value
        }
  
      default:
        return 2
    }
  }

  export default filters