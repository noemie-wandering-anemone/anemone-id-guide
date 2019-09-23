import request from 'superagent'

export const ADD_FILTER = 'ADD_FILTER'
export const LIST_ANEMONES = 'LIST_ANEMONES'

export const addFilter = (filter, value) => {
    return {   
      type: ADD_FILTER,
      filter: filter,
      value: value,
    }
  }

export const listAnemones = (anemones) => {
  return {
    type: LIST_ANEMONES,
    anemones: anemones
  }
}