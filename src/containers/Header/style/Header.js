import { Logo } from "./style.js";
import { Text } from "./style.js";
import { Link } from "./style.js";
import { Group } from "./style.js";
import { Frame } from "./style.js";
import { Search } from "./style.js";
import { Button } from "./style.js";
import { Picture } from "./style.js";
import { Profile } from "./style.js";
import { Feature } from "./style.js";
import { Dropdown } from "./style.js";
import { Container } from "./style.js";
import { PlayButton } from "./style.js";
import { Background } from "./style.js";
import { SearchIcon } from "./style.js";
import { SearchInput } from "./style.js";
import { FeatureCallOut } from "./style.js";

import { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { useBrowseContext } from "../../../context/StateProvider.js";

import { SET_SEARCH_TERM } from "../../../constants.js";

HeaderContainer.Button = ({ ...restProps }) => (
    <Button {...restProps}></Button>
);

HeaderContainer.Logo = ({ to, ...restProps }) => (
    <ReactRouterLink to={to}>
        <Logo {...restProps} />
    </ReactRouterLink>
);

HeaderContainer.Picture = ({ src, ...restProps }) => (
    <Picture src={`/images/users/${src}.png`} {...restProps} />
);

HeaderContainer.Text = ({ children, ...restProps }) => (
    <Text {...restProps}>{children}</Text>
);

HeaderContainer.Frame = ({ children, ...restProps }) => (
    <Container {...restProps}>{children}</Container>
);

HeaderContainer.Group = ({ children, ...restProps }) => (
    <Group {...restProps}>{children}</Group>
);


HeaderContainer.Profile = ({ children, ...restProps }) => (
    <Profile {...restProps}>{children}</Profile>
);

HeaderContainer.Feature = ({ children, ...restProps }) => (
    <Feature {...restProps}>{children}</Feature>
);


HeaderContainer.Dropdown = ({ children, ...restProps }) => (
    <Dropdown {...restProps}>{children}</Dropdown>
);

HeaderContainer.TextLink = ({ children, ...restProps }) => (
    <Link {...restProps}>{children}</Link>
);

HeaderContainer.Container = ({ children, ...restProps }) => (
    <Frame {...restProps}>{children}</Frame>
);

HeaderContainer.PlayButton = ({ children, ...restProps }) => (
    <PlayButton {...restProps}>{children}</PlayButton>
);

HeaderContainer.FeatureCallOut = ({ children, ...restProps }) => (
    <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
);

HeaderContainer.Search = function HeaderContainerSearch({ ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);

    const [{ searchTerm }, dispatch] = useBrowseContext();

    return (
        <Search {...restProps}>
            <SearchIcon
                src="/images/icons/search.png"
                onClick={() => setSearchActive(searchActive => !searchActive)}
            />
            <SearchInput
                onChange={({ target }) => dispatch({ type: SET_SEARCH_TERM, searchTerm: target.value })}
                value={searchTerm}
                placeholder="Search films and series"
                active={searchActive}
            />
        </Search>
    );
}

export function HeaderContainer({ bg = true, children, ...restProps }) {
    return (
        bg ? <Background {...restProps}>{children}</Background> : children
    );
}