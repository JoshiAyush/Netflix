import { Title } from "./style.js";
import { SubTitle } from "./style.js";
import { Container } from "./style.js";

FeatureContainer.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);

FeatureContainer.SubTitle = ({ children, ...restProps }) => (
    <SubTitle {...restProps}>{children}</SubTitle>
);

export function FeatureContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}