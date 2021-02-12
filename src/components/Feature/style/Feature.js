import { Title } from "./style.js";
import { SubTitle } from "./style.js";
import { Container } from "./style.js";

FeatureContainer.Title = function FeatureTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

FeatureContainer.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
}

export function FeatureContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}