import styled from 'styled-components/macro';

import React, { createContext, useState, useContext } from 'react';

const Container = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
`;

const Item = styled.div`
    width: 75%;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    cursor: pointer;
    font-size: 26px;
    font-weight: normal;
    margin-bottom: 2.5px;
    margin-top: 2.5px;
    background: #303030;
    padding: 0.8em 1.2em;
    user-select: none;
    align-items: center;

    img {
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 600px) {
            width: 16px;
        }
    }

    @media (max-width: 600px) {
        font-size: 16px;
    }
`;

const Body = styled.div`
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    font-size: 20px;
    color: white;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    padding: 0.8em 2.2em;
    white-space: pre-wrap;
    user-select: none;
    margin-top: -2px;

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
        padding: 0.8em 1.1em;
    }
`;

const Frame = styled.div`
    margin-bottom: 40px;
`;

const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
    align-items: center;
`;

const Title = styled.div`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: white;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 30px;
    }
`;



const ToggleContext = createContext();

export function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    );
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return (
        <Frame {...restProps}>
            {children}
        </Frame>
    );
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false);

    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProps}>
                {children}
            </Item>
        </ToggleContext.Provider>
    );
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);

    return (
        <Header onClick={() => setToggleShow(toggleShow => !toggleShow)} {...restProps}>
            {children}
            {
                toggleShow ? (
                    <img src="/images/icons/close-slim.png" alt="close" />
                ) :
                    (
                        <img src="/images/icons/add.png" alt="Open" />
                    )
            }
        </Header>
    );
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext);

    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
}