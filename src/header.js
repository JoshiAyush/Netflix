import React from 'react';

import styled from 'styled-components/macro';

import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div``;

export const Container = styled.div``;

export const Logo = styled.img``;

export const Frame = styled.div``;

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

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo />
                <Header.Button />
            </Header.Frame>
        </Header>
    );
}