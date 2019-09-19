import * as actions from '../../client/actions'

test('addFilter', () => {
    let action = actions.addFilter('tentacules', 'long')
    expect(action.type).toBe('ADD_FILTER')
    expect(action.filter).toBe('tentacules')
    expect(action.value).toBe('long')
})