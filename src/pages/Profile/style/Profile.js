import { Head } from "./style.js";
import { Body } from "./style.js";
import { Container } from "./style.js";

ProfileContainer.Head = ({ children, ...restProps }) => (
  <Head {...restProps}>{children}</Head>
);

ProfileContainer.Body = ({ children, ...restProps }) => (
  <Body {...restProps}>{children}</Body>
);

export function ProfileContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
