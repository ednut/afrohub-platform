import FormWrapStyle from '../components/styles/FormWrapStyle'

export default function FormWrap(props) {
  return (
    <FormWrapStyle>
        <div className="formWrap-container">
          <div className="title">{props.title}</div>
          <div className="caption">{props.caption}</div>
          <div className="social-wrap">
              <img src="/static/linkedin.svg" alt="linkedin" />
              <img src="/static/facebook.svg" alt="facebook" />
              <img src="/static/gmail.svg" alt="gmail" />
          </div>
          <div className="form-caption">{props.formCaption}</div>
          {props.children}
        </div>
    </FormWrapStyle>
  )
}
