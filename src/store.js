//import { createStore } from "redux";
import rootred from "./redux/reducers/main";
import { legacy_createStore as createStore
 } from "redux";

const store = createStore(
    rootred
);


export default store;