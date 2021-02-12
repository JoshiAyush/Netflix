import {Text} from "./style.js";
import {Input} from "./style.js";
import {Button} from "./style.js";
import {Container} from "./style.js";

OptFormContainer.Input = function OptFormInput({ children, ...restProps }) {
    return (
        <Input {...restProps} />
        );
}

OptFormContainer.Button = function OptFormButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    );
}

OptFormContainer.Text = function OptFormText({ children, ...restProps }) {
    return (
        <Text {...restProps}>
            {children}
        </Text>
    );
}

export function OptFormContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}