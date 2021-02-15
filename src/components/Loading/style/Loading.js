import { Container, LockBody, ReleaseBody } from "./style.js";

LoadingContainer.LockBody = (...restProps) => (
    <LockBody {...restProps} />
);

LoadingContainer.ReleaseBody = (...restProps) => (
    <ReleaseBody {...restProps} />
);

LoadingContainer.Spinner = ({ children, ...restProps }) => (
    <Spinner {...restProps}>
        {children}
    </Spinner>
);

export function LoadingContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}