import {filterAnemones} from '../../client/helpers'

describe('filterAnemones', () => {
    test('One filter returns expected results', () => {
        //arrange
        let anemones =  [{id: 1, name: 'Green Striped Anemone', species: 'neozelanica', color: 'green', acontia: true},
                        {id: 2, name: 'Starburst Anemone', species: 'sola', color: 'green', acontia: false},
                        {id: 3, name: 'Waratah Anemone', species: 'tenebrosa', color: 'red', acontia: false},
                        {id: 4, name: 'Beadlet Anemone', species: 'equina', color: 'red', acontia: false},
                        {id: 5, name: 'Beadlet Anemone', species: 'mediterranea', color: 'red', acontia: false},
                        {id: 6, name: 'Knobbly Anemone', species: 'capense', color: 'purple', acontia: false}]
        let filter = { color: 'red'}
        const expected = 3
        //act
        let actual = filterAnemones(anemones, filter)
        //assess
        expect(actual.length).toBe(expected)
    })
})
