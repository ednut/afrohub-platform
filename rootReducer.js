import { combineReducers } from "redux";
import loginReducer from "./modules/login";
import signupReducer from "./modules/signup";


export const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer
});
