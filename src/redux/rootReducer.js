import { combineReducers } from "redux";
import postReducer from "./post/postReducer";

// create root reducer 
const rootReducer = combineReducers({
   post : postReducer,
});

// export default
export default rootReducer; 
















