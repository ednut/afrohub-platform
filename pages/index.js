import React, { useState } from 'react';
import { connect } from "react-redux";
import { loginRequest } from "../modules/login";
import FormWrap from '../components/FormWrap';
import InputStyle from '../components/styles/InputStyles';
import Link from '../components/Link';
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';



function Login(props) {

  let initialState = {
    username: '', 
    password: ''
  }

  const [ user, setUser ] = useState(initialState);
  const [ message, validateInput ] = useState({usernameError: '', passwordError: ''});

  const validate = () => {
    let usernameError = "";
    let passwordError = "";

    if (user.username && !user.username.includes('@')){
      usernameError = 'Invalid Email';
    }else if(!user.username){
      usernameError = 'Email is required';
    }else{
      usernameError = '';
    }

    if(!user.password){
      passwordError = 'Password is required';
    }

    
    if (usernameError || passwordError){
      validateInput(() => {
        return {
          ...message,
          usernameError,
          passwordError
        }
      })
      return false;
    }
    return true;
    
    
  }
  const submit = (e) => {
    e.preventDefault();
    const isValid = validate()
    if(isValid){
      props.loginRequest(user)
    }
    setUser(() => {
      return initialState;
    })
  }
  const antIcon = <LoadingOutlined style={{ fontSize: 21, color: '#fff' }} spin />;

  return (
    <FormWrap title="Login into afrohub" 
              caption="Choose one of the following sign up methods."
              formCaption="Or login using your email address"
    >
      <form onSubmit={submit}>
        <InputStyle>
          <input className="input" type="text" value={user.username} onChange={ (e) => setUser({...user, username: e.target.value}) } placeholder="Your Email / Username" />
          <label className="label" data-content="Your Email / Username">
            <span className="hidden">Your Email / Username</span>     
          </label>
          <span className="error">{message.usernameError}</span>
        </InputStyle>

        <InputStyle>
          <input className="input" type="password" value={user.password} onChange={ (e) => setUser({...user, password: e.target.value}) } placeholder="Enter Password" />
          <label className="label" data-content="Enter Password">
            <span className="hidden">Enter Password</span>     
          </label>
          <span className="error">{message.passwordError}</span>
        </InputStyle>

        <div className="forgot-password">
          <div className="remember">
            <input id="remember-me" type="checkbox"/>
            <label htmlFor="remember-me">Remember Me</label>
          </div>
          <div className="forgot">
            <Link href="/">
              <a>Forgot Password</a>
            </Link>
          </div>
        </div>
      
        <button type="submit">
              {props.loading ? (
                <Spin indicator={antIcon} />
              ) : (
                "Login"
              )}
        </button>

        <div className="no-account">
          Don't have an account with AfroHub? <Link href="/signup"><a>Get Started</a></Link>
        </div>
      </form>
      
    </FormWrap>
  )
}

const mapStateToProps = state => ({
  loading: state.login.loading
});

export default connect(
  mapStateToProps,
  { loginRequest }
)(Login);
