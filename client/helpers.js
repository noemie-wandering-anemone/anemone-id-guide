export function filterAnemones (anemones, filters) {
    // Starting point:
    //      - array of anemones objects
    let matchingAnemones = anemones
    //      - a filters object
    let filtersArray = Object.entries(filters)
    // Goal:
    // Look at each filter:
    filtersArray.forEach(filter => {
    //  check if anemone matches the filter
        matchingAnemones = matchingAnemones.filter(filteringFunction, filter) 
    })
    return matchingAnemones
}

//  Check if anemone has filter key and filter value:
function filteringFunction (anemone) {
    //      if value = null, keep anemone
            if (this[1] === '') return true
    //      if not matching, remove it from array
            if (anemone[this[0]] != [this[1]]) return false
    //      if yes keep the anemone    
            return true   
}