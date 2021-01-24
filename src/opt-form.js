import styled from 'styled-components/macro';

import React from 'react';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    margin-top: 20px;
    min-width: 250px;
    width: 60%;
    text-align: center;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Input = styled.input`
    max-width: 450px;
    min-width: 220px;
    width: 60%;
    border: 0;
    outline: none;
    padding: 10px;
    padding-left: 20px;
    height: 70px;
    box-sizing: border-box;
    font-size: 20px;

    @media (max-width: 1000px) {
        width: 100%;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    height: 70px;
    width: 40%;
    background: #e50914;
    color: white;
    text-transform: uppercase;
    padding: 0 32px;
    font-size: 16px;
    border: 0;
    cursor: pointer;
    outline: none;
    font-weight: bold;

    &:hover {
        background: #f40612;
    }

    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 1000px) {
            width: 10px;
        }
    }

    @media (max-width: 1000px) {
        width: 190px;
        height: 50px;
        font-size: 16px;
        margin-top: 8px;
    }
`;

export const Text = styled.p`
    @media (max-width: 500px) {
        font-size: 10px;
    }
`;


export function OptForm({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}

OptForm.Input = function OptFormInput({ children, ...restProps }) {
    return (
        <Input {...restProps} />
    );
}

OptForm.Button = function OptFormButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    );
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
    return (
        <Text {...restProps}>
            {children}
        </Text>
    );
}