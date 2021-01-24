import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { HOME, SIGN_IN } from '../constants';

const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `/images/misc/${src}.jpg` : `/images/misc/home-bg.jpg`)}) top left / cover no-repeat;
    color: white;
    border-bottom: 8px solid #222;
`;

const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media (max-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 60px auto;
`;

const Button = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    font-weight: bold;

    &:hover {
        background-color: #f40612;
    }
`;



function Header({ bg = true, children, ...restProps }) {
    return (
        bg ? <Background {...restProps}>{children}</Background> : children
    );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
}

Header.Button = function HeaderButton({ ...restProps }) {
    return (
        <Button {...restProps}></Button>
    );
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
    return <Frame>{children}</Frame>;
}


export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={HOME} src="/images/logo.svg" alt="Netflix" />
                <Header.Button to={SIGN_IN}>Sign In</Header.Button>
            </Header.Frame>
            <Header.Container>
                {children}
            </Header.Container>
        </Header>
    );
}