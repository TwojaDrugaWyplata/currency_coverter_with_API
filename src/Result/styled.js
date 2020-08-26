import styled from "styled-components";

export const ResultBox = styled.p`
    text-align: center;
    font-size: 20px;
    background-color: ${({ theme }) => theme.color.bigStone};
    border: 5px solid #000000;
    border-radius: 20px;
    color: ${({ theme }) => theme.color.sun};
    padding: 10px;
    min-height: 2em;
    line-height: 1.5;
`