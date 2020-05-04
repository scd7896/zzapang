import { combineReducers } from "redux";
import thumbnail from "./thumbnail";
import category from './category';
import scroll from './scroll';

const rootReducer = combineReducers({
  thumbnail,
  category,
  scroll
});

export default rootReducer;
