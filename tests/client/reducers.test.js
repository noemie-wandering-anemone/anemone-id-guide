import filter from '../../client/reducers/filter'
import {addFilter} from '../../client/actions'

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