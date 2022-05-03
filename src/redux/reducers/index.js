import { combineReducers } from "redux";
import characters from "./characters";
import episodes from "./episodes";
import locations from "./locations";

const rootReducer = combineReducers({
  characters: characters,
  episodes: episodes,
  locations: locations,
});

export default rootReducer;
