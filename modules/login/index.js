import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_LOADING } from "../types";
import { postData } from "../../services/fetchData";
import { LoginAPI } from "../../Config"
// import Cookies from "js-cookie";
// import Router from "next/router";
import { message } from "antd";

const initialState = {
    user: {},
    error: ""
  };

// Reducer

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN_LOADING:
        return {
          ...state,
          loading: action.payload
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload
        };
      case LOGIN_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
}


// Action

export function loginRequest(data){
    return dispatch => {
        dispatch({ type: LOGIN_LOADING, payload: true });
        postData(LoginAPI, data).then(
            user => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: user
                });
                message.success("Login Successful");
                dispatch({ type: LOGIN_LOADING, payload: false });
                // Router.push("/profile");
            },
            err => {
                message.error(err);
                dispatch({ type: LOGIN_LOADING, payload: false });
                dispatch({ type: LOGIN_ERROR, payload: err });
            }
        )
    }
}