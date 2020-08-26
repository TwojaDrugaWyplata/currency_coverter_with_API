import styled from "styled-components";

export const Wrapper = styled.header`
    display: block;
    padding: 30px;
    font-size: 45px;
    background-color: ${({ theme }) => theme.color.bigStone};
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 30px;
    }
`
export const Content = styled.p`
    color: ${({ theme }) => theme.color.sun};
`