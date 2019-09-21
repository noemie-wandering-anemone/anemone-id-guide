export function filterAnemones (anemones, filters) {
    // Starting point:
    //      - array of anemones objects
    // let anemonesMatching = anemones
    //      - a filters object
    let filtersArray = Object.entries(filters)

    // Goal:
    // Look at each filter:
    filtersArray.forEach(filter => {
    //  check if anemone matches the filter
        let matchingAnemones = anemones.filter(filteringFunction, filter) 

        // need to update state at this stage so this part of the function needs to be back in component
        console.log('win?', matchingAnemones)
    })

    //  Check:
    function filteringFunction (anemone) {
            console.log('this', this)
            console.log('anemone', anemone)
        //      if anemone has filter key and filter value
                if (anemone[this[0]] != [this[1]]) {
        //      if not matching, remove it from array
        console.log('false')
                    return false        }
        //      if yes keep the anemone    
        console.log('true')
                return true   
    }

}