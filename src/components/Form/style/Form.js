import { Link } from "./style.js";
import { Base } from "./style.js";
import { Text } from "./style.js";
import { Title } from "./style.js";
import { Inner } from "./style.js";
import { Input } from "./style.js";
import { Error } from "./style.js";
import { Submit } from "./style.js";
import { TextSmall } from "./style.js";
import { Container } from "./style.js";

FormContainer.Error = function FormContainerError({ children, ...restProps }) {
    return (
        <Error {...restProps}>
            {children}
        </Error>
    );
}

FormContainer.Base = function FormContainerBase({ children, ...restProps }) {
    return (
        <Base {...restProps}>
            {children}
        </Base>
    );
}

FormContainer.Title = function FormContainerTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    );
}

FormContainer.Text = function FormContainerText({ children, ...restProps }) {
    return (
        <Text {...restProps}>
            {children}
        </Text>
    );
}

FormContainer.TextSmall = function FormContainerTextSmall({ children, ...restProps }) {
    return (
        <TextSmall {...restProps}>
            {children}
        </TextSmall>
    );
}

FormContainer.Link = function FormContainerLink({ children, ...restProps }) {
    return (
        <Link {...restProps}>
            {children}
        </Link>
    );
}

FormContainer.Input = function FormContainerInput({ ...restProps }) {
    return (
        <Input {...restProps} />
    );
}

FormContainer.Submit = function FormContainerSubmit({ children, ...restProps }) {
    return (
        <Submit {...restProps}>
            {children}
        </Submit>
    );
}

FormContainer.Inner = function FormContainerInner({ children, ...restProps }) {
    return (
        <Inner {...restProps}>
            {children}
        </Inner>
    );
}

export function FormContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}