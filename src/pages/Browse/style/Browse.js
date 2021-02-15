import { Container } from "./style.js";

export function BrowseContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}