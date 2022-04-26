import * as type from "../types";

export function getCharacters(page) {
    return {
        type: type.GET_CHARACTERS_REQUESTED,
        payload: {page: page}
    }
}
