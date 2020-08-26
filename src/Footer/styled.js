import styled from "styled-components";

export const FooterContent = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.sun};
    text-align: center;
`