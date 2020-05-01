import { combineReducers } from "redux";
import thumbnail from "./thumbnail";
import category from './category';

const rootReducer = combineReducers({
  thumbnail,
  category
});

export default rootReducer;
