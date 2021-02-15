import { Logo } from "./style.js";
import { Frame } from "./style.js";
import { Button } from "./style.js";
import { Container } from "./style.js";
import { Background } from "./style.js";

import { Link as ReactRouterLink } from "react-router-dom";

HeaderContainer.Frame = ({ children, ...restProps }) => (
    <Container {...restProps}>{children}</Container>
);

HeaderContainer.Logo = ({ to, ...restProps }) => (
    <ReactRouterLink to={to}>

        <Logo {...restProps} />

    </ReactRouterLink>
);

HeaderContainer.Button = ({ ...restProps }) => (
    <Button {...restProps}></Button>
);

HeaderContainer.Container = ({ children, ...restProps }) => (
    <Frame {...restProps}>{children}</Frame>
);


export function HeaderContainer({ bg = true, children, ...restProps }) {
    return (
        bg ? <Background {...restProps}>{children}</Background> : children
    );
}