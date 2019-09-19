import request from 'superagent'

const rootUrl = '/api/v1'

export function getData(filter) {
  return request.get(rootUrl + '/filters/' + filter)
    .then(res => {
      const criteriaList = res.body.map(criteria => criteria[filter]) 
      return criteriaList
    })
}
