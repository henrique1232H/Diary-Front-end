import styled from "styled-components";

export const Container = styled.div`
    height: auto;
    width: 100%;
    margin-top: 10rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    background: ${({theme}) => theme.COLOR.white};
    color: #000;
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const Paragraph = styled.p`
    font-size: 1.3rem;
    margin-top: 1rem;
`