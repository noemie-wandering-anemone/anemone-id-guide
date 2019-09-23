import filter from '../../client/reducers/filter'
import anemones from '../../client/reducers/anemones'
import {addFilter, listAnemones} from '../../client/actions'

describe('filter reducer', () => {
    test('initial state is an object', () => {
        const expected = 'object'
        let state = filter(undefined, {type: '@@INIT'})
        expect(typeof state).toBe(expected)
    })
    test('filter reducer add the right value', () => {
        let initialState = {}
        let state = filter(initialState, addFilter('color', 'green'))
        expect(state.color).toBe('green')
    })
})

describe('anemones reducer', () => {
    test('initial state is an array', () => {
        const expected = []
        let state = anemones(undefined, {type: '@@INIT'})
        expect(state).toEqual(expected)
    })
    test('filter reducer add the right value', () => {
        let initialState = []
        let testAnemones = [{id: 1, name: 'Green Striped Anemone', color_id: 'green'},
                            {id: 2, name: 'Starburst Anemone', color_id: 'purple'}]
        let state = anemones(initialState, listAnemones(testAnemones))
        expect(state.length).toBe(2)
    })
})