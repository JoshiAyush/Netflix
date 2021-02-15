import styled from "styled-components";
import { Item } from "./style.js";
import { List } from "./style.js";
import { Name } from "./style.js";
import { Inner } from "./style.js";
import { Title } from "./style.js";
import { Picture } from "./style.js";
import { Container } from "./style.js";

SelectProfileContainer.Inner = ({ children, ...restProps }) => (
    <Inner {...restProps}>
        {children}
    </Inner>
);

SelectProfileContainer.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>
        {children}
    </Title>
);

SelectProfileContainer.User = ({ children, ...restProps }) => (
    <Item {...restProps}>
        {children}
    </Item>
);

SelectProfileContainer.List = ({ children, ...restProps }) => (
    <List {...restProps}>
        {children}
    </List>
);

SelectProfileContainer.Picture = ({ ...restProps }) => (
    <Picture src={restProps?.src ? restProps?.src : `/images/misc/loading.gif`} {...restProps} />
);

SelectProfileContainer.Name = ({ children, ...restProps }) => (
    <Name {...restProps}>
        {children}
    </Name>
);

export function SelectProfileContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}