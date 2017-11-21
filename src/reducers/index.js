import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {reducer as contentReducer} from "./content";

// main reducers
export const reducers = combineReducers({
  router: routerReducer,
  content: contentReducer,
});
