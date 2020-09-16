import FormWrap from '../components/FormWrap';
import InputStyle from '../components/styles/InputStyles';
import Link from '../components/Link';
import ButtonStyle from '../components/styles/ButtonStyle';


export default function Login() {
  return (
    <FormWrap title="Login into afrohub" 
              caption="Choose one of the following sign up methods."
              formCaption="Or login using your email address"
    >
      <form>
        <InputStyle>
          <input class="input" type="text" placeholder="Your Email / Username" />
          <label class="label" data-content="Your Email / Username">
            <span class="hidden">Your Email / Username</span>     
          </label>
        </InputStyle>

        <InputStyle>
          <input class="input" type="password" placeholder="Enter Password" />
          <label class="label" data-content="Enter Password">
            <span class="hidden">Enter Password</span>     
          </label>
        </InputStyle>

        <div className="forgot-password">
          <div className="remember">
            <input id="remember-me" type="checkbox"/>
            <label for="remember-me">Remember Me</label>
          </div>
          <div className="forgot">
            <Link href="/">
              <a>Forgot Password</a>
            </Link>
          </div>
        </div>
      
        <ButtonStyle full>Login</ButtonStyle>

        <div className="no-account">
          Don't have an account with AfroHub? <Link href="/signup"><a>Get Started</a></Link>
        </div>
      </form>
      
    </FormWrap>
  )
}
