import { Container } from "./style.js";

export function SelectProfileContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}