import styled from 'styled-components';

const FormWrapStyles = styled.div`
    background-color: ${props => props.theme.formBG};
    width: 100%;
    height: 100vh;
    padding: 5rem 0;
    .formWrap-container{
        width: 40%;
        min-height: 30rem;
        background-color: ${props => props.theme.white};
        margin: 0 auto;
        border-radius: 2.5rem;
        box-shadow: 0 4px 10px 0 rgba(0,0,0,0.06), 0 4px 20px 0 rgba(0,0,0,0.1);
        padding: 3rem;
        @media (max-width: 991px){
            width: 90%;
        }
        .title{
            font-size: ${props => props.theme.titleFont};
            font-weight: 500;
            letter-spacing: 1px;
        }
        .caption{
            font-size: ${props => props.theme.captionFont};
        }
        .social-wrap{
            margin-top: 1rem;
            position: relative;
            &:after{
                content: '';
                width: 108%;
                position: absolute;
                bottom: -1.3rem;
                right: 0;
                left: -4%;
                border-top: 1px solid #efefef;
            }
            img{
                width: 4rem;
                margin-right: 1rem;
                cursor: pointer;
            }
        }
        .form-caption{
            font-size: ${props => props.theme.captionFont};
            margin-top: 2rem;
        }
    }
    .forgot-password{
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
        .remember{
            width:30%;
            font-size: 1.4rem;
            input{
                margin-right: 1rem;
                vertical-align: text-bottom;
            }
        }
        .forgot{
            width:70%;
            text-align: right;
            a{
                color: ${props => props.theme.brandColor};
                font-size: 1.4rem;
            }
        }
    }
    .no-account{
        width: 90%;
        margin: 0 auto;
        margin-top: 2rem;
        background-color: #E2ECFF;
        text-align: center;
        color: #5A78B2;
        padding: 1rem 1.5rem;
        border-radius: 0 0 2rem 2rem;
        letter-spacing: 0.05rem;

        a{
            color: #5A78B2;
            font-size: 1.4rem;
            text-decoration: underline;
        }
    }
`

export default FormWrapStyles