import { P } from "./style.js";
import { Span } from "./style.js";
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
import { SuggestPassword } from "./style.js";

FormContainer.P = ({ children, ...restProps }) => (
    <P {...restProps}>
        {children}
    </P>
);

FormContainer.Span = ({ children, ...restProps }) => (
    <Span {...restProps}>
        {children}
    </Span>
);

FormContainer.Error = ({ children, ...restProps }) => (
    <Error {...restProps}>
        {children}
    </Error>
);

FormContainer.Base = ({ children, ...restProps }) => (
    <Base {...restProps}>
        {children}
    </Base>
);

FormContainer.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>
        {children}
    </Title>
);

FormContainer.Text = ({ children, ...restProps }) => (
    <Text {...restProps}>
        {children}
    </Text>
);

FormContainer.TextSmall = ({ children, ...restProps }) => (
    <TextSmall {...restProps}>
        {children}
    </TextSmall>
);

FormContainer.Link = ({ children, ...restProps }) => (
    <Link {...restProps}>
        {children}
    </Link>
);

FormContainer.Input = ({ ...restProps }) => (
    <Input {...restProps} />
);

FormContainer.SuggestPassword = ({ children, ...restProps }) => (
    <SuggestPassword {...restProps}>
        {children}
    </SuggestPassword>
);

FormContainer.Submit = ({ children, ...restProps }) => (
    <Submit {...restProps}>
        {children}
    </Submit>
);

FormContainer.Inner = ({ children, ...restProps }) => (
    <Inner {...restProps}>
        {children}
    </Inner>
);

export function FormContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}