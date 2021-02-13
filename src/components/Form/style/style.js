import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    height: 580px;
    max-height: 660px;
    width: 450px;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    box-sizing: border-box;
    padding: 60 68px 40px;
    margin-bottom: 100px;
`;

export const Inner = styled.div`
    max-width: 360px;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 580px;
    max-height: 660px;
    margin: auto;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 60 68px 40px;
    padding-top: 40px;
`;

export const Error = styled.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 360px;
    width: 100%;
    margin: 0 auto;
`;

export const Text = styled.p`
    color: #737373;
    font-size: 16px;
    font-weight: 500;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 28px;
`;

export const TextSmall = styled.p`
    margin-top: 10px;
    font-size: 12px;
    line-height: normal;
    color: #8c8c8c;
`;

export const Link = styled(ReactRouterLink)`
    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const Input = styled.input`
    background: #333;
    border-radius: 4px;
    border: 0;
    color: white;
    height: 50px;
    line-height: 50px;
    padding: 5px 20px;
    margin-bottom: 20px;
    outline: none;
    font-size: large;

    &:last-of-type {
        margin-bottom: 30px;
    }
`;

export const Submit = styled.button`
    background: #e50914;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 24px 0 12px;
    padding: 16px;
    border: 0;
    color: white;
    cursor: pointer;
    outline: none;

    &:disabled {
        opacity: 0.5;
    }
`;