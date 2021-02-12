import { Pane } from "./style.js";
import { Item } from "./style.js";
import { Inner } from "./style.js";
import { Image } from "./style.js";
import { Title } from "./style.js";
import { SubTitle } from "./style.js";
import { Container } from "./style.js";

JumbotronContainer.Container = function JumbotronContainerContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}


JumbotronContainer.Pane = function JumbotronContainerPane({ children, ...restProps }) {
    return (
        <Pane {...restProps}>
            {children}
        </Pane>
    );
}

JumbotronContainer.Title = function JumbotronContainerTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    );
}

JumbotronContainer.SubTitle = function JumbotronContainerSubTitle({ children, ...restProps }) {
    return (
        <SubTitle {...restProps}>
            {children}
        </SubTitle>
    );
}

JumbotronContainer.Image = function JumbotronContainerImage({ ...restProps }) {
    return (
        <Image {...restProps} />
    );
}

export function JumbotronContainer({ children, direction = "row", ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    );
}