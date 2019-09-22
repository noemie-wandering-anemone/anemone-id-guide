export function filterAnemones (anemones, filters) {
    // Starting point:
    //      - array of anemones objects
    // let anemonesMatching = anemones
    //      - a filters object
    let filtersArray = Object.entries(filters)
    let matchingAnemones = []
    
    // Goal:
    // Look at each filter:
    filtersArray.forEach(filter => {
    //  check if anemone matches the filter
        matchingAnemones = anemones.filter(filteringFunction, filter) 
    })
    return matchingAnemones
}

//  Check:
function filteringFunction (anemone) {
        console.log(this)
    //      if anemone has filter key and filter value
            if (anemone[this[0]] != [this[1]]) {
    //      if not matching, remove it from array
                return false        }
    //      if yes keep the anemone    
            return true   
}