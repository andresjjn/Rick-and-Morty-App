import * as type from '../types';

const initialState = {
    characters: [],
    loading: false,
    error: null
}

export default function characters(state = initialState, action) {
    switch (action.type) {
        case type.GET_CHARACTERS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case type.GET_CHARACTERS_SUCCESS:
            return {
                ...state,
                loading: false, 
                characters: action.chatacters
            }
        case type.GET_CHARACTERS_FAILED:
            return {
                ...state,
                loading: false, 
                error: action.message
        }
        default:
            return state
    }   
}
