import React, { useState } from 'react';
import { connect } from "react-redux";
import { signupRequest } from "../modules/signup";
import FormWrap from '../components/FormWrap';
import InputStyle from '../components/styles/InputStyles';
import Link from '../components/Link';
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';



function Signup(props) {

  let initialState = {
    first_name: '', 
    last_name: '',
    email: '',
    phone: '',
    password: '',
    verify_password: '',
  }

  const [ user, setUser ] = useState(initialState);
  const [ message, validateInput ] = useState({
    firstNameError: '', 
    lastNameError: '',
    emailError: '',
    phoneError: '',
    passwordError: '',
    verifyPasswordError: '',
});

  const validate = () => {
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let phoneError = "";
    let passwordError = "";
    let verify_password = "";

    if (user.email && !user.email.includes('@')){
        emailError = 'Invalid Email';
    }else if(!user.email){
        emailError = 'Email is required';
    }else{
        emailError = '';
    }

    if(!user.password){
      passwordError = 'Password is required';
    }

    
    if (emailError || passwordError){
      validateInput(() => {
        return {
          ...message,
          emailError,
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
      props.signupRequest(user)
    }
    setUser(() => {
      return initialState;
    })
  }
  const antIcon = <LoadingOutlined style={{ fontSize: 21, color: '#fff' }} spin />;

  return (
    <FormWrap title="Sign up for free" 
              caption="Choose one of the following sign up methods.."
              formCaption="Or sign up using your email address"
    >
      <form onSubmit={submit}>
        <InputStyle width="48%">
          <input className="input" type="text" value={user.first_name} onChange={ (e) => setUser({...user, first_name: e.target.value}) } placeholder="First Name" />
          <label className="label" data-content="First Name">
            <span className="hidden">First Name</span>     
          </label>
          <span className="error">{message.firstNameError}</span>
        </InputStyle>

        <InputStyle width="48%">
          <input className="input" type="text" value={user.last_name} onChange={ (e) => setUser({...user, last_name: e.target.value}) } placeholder="Last Name" />
          <label className="label" data-content="Last Name">
            <span className="hidden">Last Name</span>     
          </label>
          <span className="error">{message.lastNameError}</span>
        </InputStyle>

        <InputStyle width="48%">
          <input className="input" type="email" value={user.email} onChange={ (e) => setUser({...user, email: e.target.value}) } placeholder="Email" />
          <label className="label" data-content="Email">
            <span className="hidden">Email</span>     
          </label>
          <span className="error">{message.emailError}</span>
        </InputStyle>

        <InputStyle width="48%">
          <input className="input" type="text" value={user.phone} onChange={ (e) => setUser({...user, phone: e.target.value}) } placeholder="Phone Number" />
          <label className="label" data-content="Phone Number">
            <span className="hidden">Phone Number</span>     
          </label>
          <span className="error">{message.phoneError}</span>
        </InputStyle>

        <InputStyle width="48%">
          <input className="input" type="password" value={user.password} onChange={ (e) => setUser({...user, password: e.target.value}) } placeholder="Password" />
          <label className="label" data-content="Password">
            <span className="hidden">Password</span>     
          </label>
          <span className="error">{message.passwordError}</span>
        </InputStyle>

        <InputStyle width="48%">
          <input className="input" type="password" value={user.verify_password} onChange={ (e) => setUser({...user, verify_password: e.target.value}) } placeholder="Verify Password" />
          <label className="label" data-content="Verify Password">
            <span className="hidden">Verify Password</span>     
          </label>
          <span className="error">{message.verify_password}</span>
        </InputStyle>

        <div className="forgot-password">
          <div className="remember">
            <input id="remember-me" type="checkbox"/>
            <label htmlFor="remember-me">I agree to afrohub’s Cookies and Privacy Policy.</label>
          </div>
        </div>
      
        <button type="submit">
              {props.loading ? (
                <Spin indicator={antIcon} />
              ) : (
                "Get Started"
              )}
        </button>

        <div className="no-account">
          Already have an account with AfroHub? <Link href="/"><a>Login</a></Link>
        </div>
      </form>
      
    </FormWrap>
  )
}

const mapStateToProps = state => ({
  loading: state.signup.loading
});

export default connect(
  mapStateToProps,
  { signupRequest }
)(Signup);
