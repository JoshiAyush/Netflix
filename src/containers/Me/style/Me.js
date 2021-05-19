import { Edit } from "./style.js";
import { Image } from "./style.js";
import { Holder } from "./style.js";
import { Button } from "./style.js";
import { Profile } from "./style.js";
import { Container } from "./style.js";

MeContainer.Button = ({ children, ...restProps }) => (
  <Button {...restProps}>{children}</Button>
);

MeContainer.Edit = ({ children, ...restProps }) => (
  <Edit {...restProps}>{children}</Edit>
);

MeContainer.UserImage = ({ ...restProps }) => (
  <Image src={restProps.src} {...restProps} />
);

MeContainer.Profile = ({ children, ...restProps }) => (
  <Profile {...restProps}>{children}</Profile>
);

MeContainer.Holder = ({ children, ...restProps }) => (
  <Holder {...restProps}>{children}</Holder>
);

export function MeContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
