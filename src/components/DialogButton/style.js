import styled from "styled-components";


export const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;

`


export const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 2rem;
`

export const Title = styled.h2`
    color: #000;
`

export const TextArea = styled.textarea`


    &:focus {
        border: none;
        outline: 1px solid ${({theme}) => theme.COLOR.blue_500};
    }
`


export const DivInputs = styled.div`
    display: flex;
    align-items: center;

` 

export const FormInputsWithoutLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    height: 3.2rem;
`

export const FormInputs = styled.div`
    display: flex;
    flex-direction: column;
`