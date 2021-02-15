import { Text } from "./style.js";
import { Input } from "./style.js";
import { Button } from "./style.js";
import { Container } from "./style.js";

OptFormContainer.Input = ({ children, ...restProps }) => (
    <Input {...restProps} />
);


OptFormContainer.Button = ({ children, ...restProps }) => (
    <Button {...restProps}>
        {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
);

OptFormContainer.Text = ({ children, ...restProps }) => (
    <Text {...restProps}>
        {children}
    </Text>
);

export function OptFormContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}