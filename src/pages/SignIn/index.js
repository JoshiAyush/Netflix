import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { HomeContainer } from "../Home/style/Home.js";
import { HeaderContainer } from "../../containers/Header/style/Header.js";
import { FormContainer } from "../../components/index.js";

import { HOME } from "../../constants.js";
import { BROWSE } from "../../constants.js";
import { SIGN_UP } from "../../constants.js";

import { handleSignIn } from "../../lib/handle-signin.js";

import { useFirebaseContext } from "../../context/StateProvider.js";

import Footer from "../../containers/Footer/index.js";


function SignIn() {
    const history = useHistory();

    const { firebase } = useFirebaseContext();

    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [error, setError] = useState("");

    const _handleSignIn = (event) => {
        event.preventDefault();

        let _status = handleSignIn(firebase, { userEmail, userPassword });

        if (_status === "SIGNED_IN") {
            /**
             * We redirect the user to the Netflix browse screen once the user is Signed In legally.
             * 
             * history.push(BROWSE);        // history.push("/browse"); 
             */
            history.push(BROWSE);

            return;
        } else if (_status != null) {
            setEmail("");
            setPassword("");
            setError(_status);
        }
    };
    const IsInvalid = userPassword === "" || userEmail === "";

    useEffect(() => {
        document.getElementById("chrome-title-tab").innerText = "Sign In to netflix";
    }, []);

    return (
        <HomeContainer>

            <HeaderContainer>

                <HeaderContainer.Frame>

                    <HeaderContainer.Logo to={HOME} src="/images/logo.svg" alt="Netflix" />

                    <HeaderContainer.Button to={SIGN_UP}>Sign Up</HeaderContainer.Button>

                </HeaderContainer.Frame>

                <HeaderContainer.Container>

                    <FormContainer>

                        <FormContainer.Inner>

                            <FormContainer.Title>

                                Sign In

                            </FormContainer.Title>

                            {error && <FormContainer.Error>{error}</FormContainer.Error>}

                            <FormContainer.Base onSubmit={_handleSignIn} method="POST">

                                <FormContainer.Input
                                    type="email"
                                    placeholder="Email Address"
                                    value={userEmail}
                                    onChange={({ target }) => setEmail(target.value)}
                                    autoComplete="on"
                                />

                                <FormContainer.Input
                                    type="password"
                                    placeholder="Password"
                                    value={userPassword}
                                    onChange={({ target }) => setPassword(target.value)}
                                    autoComplete="on"
                                />

                                <FormContainer.Submit disabled={IsInvalid} type="submit">

                                    Sign In

                                </FormContainer.Submit>

                            </FormContainer.Base>

                            <FormContainer.Text>

                                New to Netflix? <FormContainer.Link to={SIGN_UP}>Sign Up now.</FormContainer.Link>

                            </FormContainer.Text>

                            <FormContainer.TextSmall>

                                This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.

                            </FormContainer.TextSmall>

                        </FormContainer.Inner>

                    </FormContainer>

                </HeaderContainer.Container>

            </HeaderContainer>

            <Footer />

        </HomeContainer>
    );
}

export default SignIn;