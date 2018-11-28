import { combineReducers } from "redux";
import issues from "./issues-reducer";

const rootReducer = combineReducers({
    issues
});

export default rootReducer;
