import { combineReducers } from "redux";

import usersReducer from "./usersReducer";
import clientsReducer from "./clientsReducer";
import departamentsReducer from "./departamentsReducer";
import marksReducer from "./marksReducer";

export default combineReducers({
    usersReducer,
    clientsReducer,
    departamentsReducer,
    marksReducer
});
