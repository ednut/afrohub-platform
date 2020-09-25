import styled, { css } from 'styled-components';

const InputStyles = styled.div`
    margin-bottom: 1.5rem;
    transition: background-color 0.2s ease;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    position: relative;
    width: ${props => props.width ? props.width : '100%'};

    .input {
        padding: 1.3rem 1.9rem 1.1rem;
        transition: border-color 0.2s ease;
        border: 1px solid #000000ad;
        border-radius: 1rem;
        background: #fff;
        font-size: 1.6rem;
        &::placeholder {
            color: rgba(0, 0, 0, 0);
        }
        &:focus{
            border: 1px solid ${props => props.theme.brandColor};
        }
    }

    .label {
        display: block;
        position: relative;
        max-height: 0;
        font-weight: 500;
        pointer-events: none;
        &::before {
            content: attr(data-content);
            display: inline-block;
            filter: blur(0);
            backface-visibility: hidden;
            transform-origin: left top;
            transition: transform 0.2s ease;
            left: 1rem;
            position: relative;
        }
        &::after {
            bottom: 1rem;
            content: "";
            height: 0.1rem;
            position: absolute;
            transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1),
            opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease;
            opacity: 0;
            left: 0;
            top: 100%;
            margin-top: -0.1rem;
            transform: scale3d(0, 1, 1);
            width: 100%;
        }
    }

    .input:focus + .label::after {
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }

    .input:placeholder-shown + .label::before {
        transform: translate3d(0,-3.6rem,0) scale3d(0.82,0.82,1);
        background: transparent;
        padding: 0 1rem;
        line-height: 1.5rem;
        color: #000000ad;
        font-weight: 400;
        font-size: 1.6rem;
    }

    .label::before,
    .input:focus + .label::before {
        transform: translate3d(0,-5.9rem,0) scale3d(0.82,0.82,1);
        background: #fff;
        padding: 0 10px;
        line-height: 15px;
        color: #000000ad;
        font-weight: 400;
        font-size: 1.6rem;
    }

    .input:focus + .label::before {
        background: #fff;
        padding: 0 10px;
        line-height: 15px;
        color: #000000ad;
        font-weight: 400;
        font-size: 1.6rem;
    }

    .input:focus + .label::before {
        color: ${props => props.theme.brandColor};
    }

    input, select {
        background: none;
        border-width: 0;
        display: block;
        width: 100%;
        outline: none;
    }

    .hidden {
        border: 0;
        clip: rect(1px 1px 1px 1px);
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }

    .error{
        padding-left: 2rem;
        font-size: 1.4rem;
        color: red;
        display: block;
        line-height: 2rem;
        padding-top: 0.2rem;
        height: 2rem;
    }

`

export default InputStyles