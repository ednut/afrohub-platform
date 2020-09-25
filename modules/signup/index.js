import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING } from "../types";
import { postData } from "../../services/fetchData";
import { SignupAPI } from "../../Config"
// import Cookies from "js-cookie";
// import Router from "next/router";
import { message } from "antd";

const initialState = {
    user: {},
    error: ""
  };

// Reducer

export default function signupReducer(state = initialState, action) {
    switch (action.type) {
      case SIGNUP_LOADING:
        return {
          ...state,
          loading: action.payload
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          user: action.payload
        };
      case SIGNUP_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
}


// Action

export function signupRequest(data){
    return dispatch => {
        dispatch({ type: SIGNUP_LOADING, payload: true });
        postData(SignupAPI, data).then(
            user => {
                dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: user
                });
                message.success("Signup Successful");
                dispatch({ type: SIGNUP_LOADING, payload: false });
                // Router.push("/profile");
            },
            err => {
                message.error(err);
                dispatch({ type: SIGNUP_LOADING, payload: false });
                dispatch({ type: SIGNUP_ERROR, payload: err });
            }
        )
    }
}