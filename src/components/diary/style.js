import styled from "styled-components";

export const Container = styled.div`
    height: auto;
    width: 100%;
    margin-top: 2rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    background: ${({theme}) => theme.COLOR.white};
    box-shadow: 0px 0px 20px 0px #000;
    color: #000;

    &:hover {
        height: auto;
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const Label = styled.label`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
`

export const Paragraph = styled.p`
    font-size: 1.3rem;
    margin-top: 1rem;
`