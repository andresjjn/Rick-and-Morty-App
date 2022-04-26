import * as type from "../types";

const initialState = {
    episodes: [],
    loading: false,
    error: null
}

export default function episodes(state = initialState, action) {
    switch (action.type) {
        case type.GET_EPISODES_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case type.GET_EPISODES_SUCCESS:
            return {
                ...state,
                loading: false, 
                episodes: action.episodes
            }
        case type.GET_EPISODES_FAILED:
            return {
                ...state,
                loading: false, 
                error: action.message
        }
        default:
            return state
    }   
}
