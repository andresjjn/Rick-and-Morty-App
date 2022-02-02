import * as type from '../types';

export function getEpisodes() {
    return {
        type: type.GET_EPISODES_REQUESTED
    }
}
