import { Logo } from "./style.js";
import { Frame } from "./style.js";
import { Button } from "./style.js";
import { Container } from "./style.js";
import { Background } from "./style.js";

import { Link as ReactRouterLink } from 'react-router-dom';

HeaderContainer.Frame = function HeaderContainerFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

HeaderContainer.Logo = function HeaderContainerLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
}

HeaderContainer.Button = function HeaderContainerButton({ ...restProps }) {
    return (
        <Button {...restProps}></Button>
    );
}

HeaderContainer.Container = function HeaderContainerContainer({ children, ...restProps }) {
    return <Frame>{children}</Frame>;
}


export function HeaderContainer({ bg = true, children, ...restProps }) {
    return (
        bg ? <Background {...restProps}>{children}</Background> : children
    );
}