import styled from 'styled-components';

const ButtonStyle = styled.a`
    display: inline-block;
    text-decoration: none;
    box-shadow: 0 0.8rem 1.5rem rgba(0, 0, 0, 0.1);
    padding: 0.7rem 3rem;
    font-size: 1.6rem;
    border: none;
    border-radius: 0.8rem;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    min-width: 18rem;
    text-align: center;
    background: ${props => props.white ? '#ffffff' : '#3188DD'};
    color: ${props => props.white ? '#051441' : '#ffffff'};
    width: ${props => props.full ? '100%' : 'auto'};
`

export default ButtonStyle