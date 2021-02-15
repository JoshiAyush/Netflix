import { Container } from "./style.js";

export function FaqsContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}