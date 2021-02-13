import React from "react";

import { HomeContainer } from "../Home/style/Home.js";
import { HeaderContainer } from "../../containers/Header/style/Header.js";

import { HOME } from "../../constants.js";
import { SIGN_IN } from "../../constants.js";

import Footer from "../../containers/Footer/index.js";

import { Form } from "../../components/index.js";

function SignIn() {
    return (
        <HomeContainer>

            <HeaderContainer>

                <HeaderContainer.Frame>

                    <HeaderContainer.Logo to={HOME} src="/images/logo.svg" alt="Netflix" />

                    <HeaderContainer.Button to={SIGN_IN}>Sign In</HeaderContainer.Button>

                </HeaderContainer.Frame>

                <HeaderContainer.Container>

                    <Form type="signup"/>

                </HeaderContainer.Container>

            </HeaderContainer>

            <Footer />

        </HomeContainer>
    );
}

export default SignIn;