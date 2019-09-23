import * as actions from '../../client/actions'

test('addFilter', () => {
    let action = actions.addFilter('tentacules', 'long')
    expect(action.type).toBe('ADD_FILTER')
    expect(action.filter).toBe('tentacules')
    expect(action.value).toBe('long')
})

test('listAnemones', () => {
    let anemones = [{id: 1, name: 'Green Striped Anemone', color_id: 'green'},
                    {id: 2, name: 'Starburst Anemone', color_id: 'purple'}]
    let action = actions.listAnemones(anemones)
    expect(action.type).toBe('LIST_ANEMONES')
    expect(action.anemones).toBe(anemones)
})