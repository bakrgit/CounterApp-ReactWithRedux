import { createStore } from "redux";
import rootReducer from "../counter/reducerIndex";
const store = createStore(rootReducer);
export default store;
