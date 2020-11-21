import slidesReducer from "./slidesReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  slidesReducer: slidesReducer,
});

export default allReducers;
