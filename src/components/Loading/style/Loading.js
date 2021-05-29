import { Picture } from "./style.js";
import { Spinner } from "./style.js";
import { LockBody } from "./style.js";
import { Container } from "./style.js";
import { ReleaseBody } from "./style.js";

LoadingContainer.LockBody = (...restProps) => <LockBody {...restProps} />;

LoadingContainer.ReleaseBody = (...restProps) => <ReleaseBody {...restProps} />;

LoadingContainer.Spinner = ({ children, ...restProps }) => (
  <Spinner {...restProps}>{children}</Spinner>
);

LoadingContainer.Picture = ({ ...restProps }) => (
  <Picture src={restProps?.src} alt={restProps?.alt} {...restProps} />
);

export function LoadingContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
