import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

import { Body } from "./style.js";
import { Item } from "./style.js";
import { Image } from "./style.js";
import { Inner } from "./style.js";
import { Title } from "./style.js";
import { Frame } from "./style.js";
import { Header } from "./style.js";
import { Container } from "./style.js";

const ToggleContext = createContext();

AccordionContainer.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

AccordionContainer.Frame = ({ children, ...restProps }) => (
  <Frame {...restProps}>{children}</Frame>
);

AccordionContainer.Item = function AccordionContainerItem({
  children,
  ...restProps
}) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

AccordionContainer.Header = function AccordionContainerHeader({
  children,
  ...restProps
}) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <Image src="/images/icons/close-slim.png" alt="close" />
      ) : (
        <Image src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

AccordionContainer.Body = function AccordionContainerBody({
  children,
  ...restProps
}) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

export function AccordionContainer({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}
