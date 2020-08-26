import styled from "styled-components";

export const FormSheet = styled.form`
    margin-top: 50px;
`;
export const LabelText = styled.span`
    text-align: center;
`;
export const Label = styled.label`
    max-width: 600px;
    display: grid;
    grid-template-columns: auto 400px;
    grid-gap: 10px;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`;
export const Fieldset = styled.fieldset`
    background-color: ${({ theme }) => theme.color.sun};
    color: ${({ theme }) => theme.color.bigStone};
    border: 5px solid ${({ theme }) => theme.color.black};
    border-radius: 20px;
`;
export const Legend = styled.legend`
    background-color: ${({ theme }) => theme.color.bigStone};
    padding: 20px 40px;
    color: ${({ theme }) => theme.color.sun};
    border: 5px solid ${({ theme }) => theme.color.black};
    border-radius: 20px;
    text-align: center;
`;
export const Input = styled.input`
    padding: 10px;
    border: 3px solid ${({ theme }) => theme.color.black};
    border-radius: 10px;
`;
export const Button = styled.button`
    display: block;
    margin: auto;
    border-radius: 20px;
    border: 5px solid ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.sun};
    background-color: ${({ theme }) => theme.color.bigStone};
    padding: 20px 50px;
    text-transform: inherit;
    font-weight: inherit;
    cursor: pointer;

    &:hover {
        filter: brightness(120%);
    }
    &:active {
        filter: brightness(140%);
    }
`;
export const Text = styled.div`
    margin: auto;
    padding: 20px;
    text-align: center;
`;
