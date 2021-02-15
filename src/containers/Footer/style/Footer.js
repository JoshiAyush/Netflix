import { Row } from "./style.js";
import { Link } from "./style.js";
import { Text } from "./style.js";
import { Title } from "./style.js";
import { Break } from "./style.js";
import { Column } from "./style.js";
import { Container } from "./style.js";

FooterContainer.Row = ({ children, ...restProps }) => (
    <Row {...restProps}>
        {children}
    </Row>
);

FooterContainer.Column = ({ children, ...restProps }) => (
    <Column {...restProps}>
        {children}
    </Column>
);

FooterContainer.Link = ({ children, ...restProps }) => (
    <Link {...restProps}>
        {children}
    </Link>
);

FooterContainer.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>
        {children}
    </Title>
);

FooterContainer.Text = ({ children, ...restProps }) => (
    <Text {...restProps}>
        {children}
    </Text>
);

FooterContainer.Break = ({ children, ...restProps }) => (
    <Break {...restProps}>
        {children}
    </Break>
);

export function FooterContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}