import request from 'superagent'

export const ADD_FILTER = 'ADD_FILTER'

export const addFilter = (filter, value) => {
    return {   
      type: ADD_FILTER,
      filter: filter,
      value: value,
    }
  }