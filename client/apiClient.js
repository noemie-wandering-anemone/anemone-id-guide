import request from 'superagent'

const rootUrl = '/api/v1'

export function getData(filter) {
  return request.get(rootUrl + '/filters/' + filter)
    .then(res => {
      if (filter === "column") {
        filter = "aspect"
      }
      const criteriaList = res.body.map(criteria => criteria[filter]) 
      console.log(criteriaList)
      return criteriaList
    })
}
