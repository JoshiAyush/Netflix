import { Pane } from "./style.js";
import { Item } from "./style.js";
import { Inner } from "./style.js";
import { Image } from "./style.js";
import { Title } from "./style.js";
import { SubTitle } from "./style.js";
import { Container } from "./style.js";

JumbotronContainer.Container = ({ children, ...restProps }) => (
    <Container {...restProps}>
        {children}
    </Container>
);

JumbotronContainer.Pane = ({ children, ...restProps }) => (
    <Pane {...restProps}>
        {children}
    </Pane>
);

JumbotronContainer.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>
        {children}
    </Title>
);

JumbotronContainer.SubTitle = ({ children, ...restProps }) => (
    <SubTitle {...restProps}>
        {children}
    </SubTitle>
);

JumbotronContainer.Image = ({ ...restProps }) => (
    <Image {...restProps} />
);

export function JumbotronContainer({ children, direction = "row", ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    );
}