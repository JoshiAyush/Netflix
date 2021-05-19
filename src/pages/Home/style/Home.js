import { Container } from "./style.js";

export function HomeContainer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
