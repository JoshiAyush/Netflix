import React from 'react';

import styled from 'styled-components/macro';

import { Link as ReactRouterLink } from 'react-router-dom';

const Background = styled.div``;

const Container = styled.div``;

const Logo = styled.img``;

const Frame = styled.div``;

const Button = styled.button``;

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
    )
}

Header.Button = function HeaderButton({ ...restProps }) {
    return (
        <Button {...restProps}></Button>
    )
}

export function HeaderContainer() {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo />
                <Header.Button />
            </Header.Frame>
        </Header>
    );
}