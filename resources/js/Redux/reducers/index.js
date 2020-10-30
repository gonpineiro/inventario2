import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import clientsReducer from "./clientsReducer";
import departamentsReducer from "./departamentsReducer";

export default combineReducers({
    usersReducer,
    clientsReducer,
    departamentsReducer
});
