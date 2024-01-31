import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

 // redux thunk 
 const middleware = [thunk]

// create store 
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)) )



// export defult 
export default store;











