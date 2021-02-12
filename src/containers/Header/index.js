import React from "react";

import { HOME } from "../../constants.js";
import { SIGN_IN } from "../../constants.js";

import { HeaderContainer } from "./style/Header.js";

function Header({ children }) {
    return (
        <HeaderContainer>

            <HeaderContainer.Frame>

                <HeaderContainer.Logo to={HOME} src="/images/logo.svg" alt="Netflix" />

                <HeaderContainer.Button to={SIGN_IN}>Sign In</HeaderContainer.Button>

            </HeaderContainer.Frame>

            <HeaderContainer.Container>

                {children}

            </HeaderContainer.Container>

        </HeaderContainer>
    );
}

export default Header;