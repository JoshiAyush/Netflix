import { Row } from "./style.js";
import { Link } from "./style.js";
import { Text } from "./style.js";
import { Title } from "./style.js";
import { Break } from "./style.js";
import { Column } from "./style.js";
import { Container } from "./style.js";

FooterContainer.Row = function FooterContainerRow({ children, ...restProps }) {
    return (
        <Row {...restProps}>
            {children}
        </Row>
    );
}

FooterContainer.Column = function FooterContainerColumn({ children, ...restProps }) {
    return (
        <Column {...restProps}>
            {children}
        </Column>
    );
}

FooterContainer.Link = function FooterContainerLink({ children, ...restProps }) {
    return (
        <Link {...restProps}>
            {children}
        </Link>
    );
}

FooterContainer.Title = function FooterContainerTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    );
}

FooterContainer.Text = function FooterContainerText({ children, ...restProps }) {
    return (
        <Text {...restProps}>
            {children}
        </Text>
    );
}

FooterContainer.Break = function FooterContainerBreak({ children, ...restProps }) {
    return (
        <Break {...restProps}>
            {children}
        </Break>
    )
}

export function FooterContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}