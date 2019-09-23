import {LIST_ANEMONES} from '../actions'

const initialAnemones = []

const anemones = (state = initialAnemones, action) => {
    switch (action.type) {
        case LIST_ANEMONES:
            return action.anemones
        default:
            return state
    }
}

export default anemones