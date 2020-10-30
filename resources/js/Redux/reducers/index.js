import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import clientsReducer from "./clientsReducer";

export default combineReducers({
    usersReducer,
    clientsReducer
});
