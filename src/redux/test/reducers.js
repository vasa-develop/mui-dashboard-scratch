import types from './types'

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {

        case types.TEST:
            return state

        default:
            return state
    }
}