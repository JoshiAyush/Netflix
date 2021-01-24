import styled from 'styled-components/macro';
import React from 'react';

const Container = styled.div``;

const Title = styled.h1`
    color: white;
    max-width: 640px;
    font-size: 50px;
    font-weight: 500;
    margin: auto;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

const SubTitle = styled.h2``;

export default function Feature({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
}