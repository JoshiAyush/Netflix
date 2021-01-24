import styled from 'styled-components/macro';
import jumboData from '../fixtures/jumbo.json';
import React from 'react';

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
`;

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Container = styled.div`
    @media (max-width: 1000px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;

export const Pane = styled.div`
    width: 50%;

    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }
`;

export const Title = styled.h1`

`;

export const SubTitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;



function Jumbotron({ children, direction = "row", ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}


Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return (
        <Pane {...restProps}>
            {children}
        </Pane>
    );
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    );
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return (
        <SubTitle {...restProps}>
            {children}
        </SubTitle>
    );
}

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return (
        <Image {...restProps} />
    );
}


export function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {
                jumboData.map(item => (
                    <Jumbotron key={item.id} direction={item.direction}>
                        <Jumbotron.Pane>
                            <Jumbotron.Title>{item.title}</Jumbotron.Title>
                            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                        </Jumbotron.Pane>
                        <Jumbotron.Pane>
                            <Jumbotron.Image src={item.image} alt={item.alt} />
                        </Jumbotron.Pane>
                    </Jumbotron>
                ))
            }
        </Jumbotron.Container>
    );
}

