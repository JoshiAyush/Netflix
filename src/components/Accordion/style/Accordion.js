import React from "reacr";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

import { Body } from "./style.js";
import { Item } from "./style.js";
import { Title } from "./style.js";
import { Frame } from "./style.js";
import { Header } from "./style.js";
import { Container } from "./style.js";

const ToggleContext = createContext();

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
                    <Image src="/images/icons/close-slim.png" alt="close" />
                ) : (
                        <Image src="/images/icons/add.png" alt="Open" />
                    )
            }
        </Header>
    );
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext);

    return (toggleShow) ? (<Body {...restProps}>{children}</Body>) : (null);
}

function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    );
}

export default Accordion;