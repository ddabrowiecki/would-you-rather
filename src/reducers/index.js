import { combineReducers } from "redux";
import authUser from "../reducers/authedUser";
import userReducer from "../reducers/users";
import questionsReducer from "../reducers/questions";

export default combineReducers({
  authUser,
  userReducer,
  questionsReducer,
});
