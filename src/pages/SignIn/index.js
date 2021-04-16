import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { HomeContainer } from "../Home/style/Home.js";
import { HeaderContainer } from "../../containers/Header/style/Header.js";

import { HOME } from "../../constants.js";
import { BROWSE } from "../../constants.js";
import { SIGN_UP } from "../../constants.js";
import { useFirebaseContext } from "../../context/StateProvider.js";

import Footer from "../../containers/Footer/index.js";

import { FormContainer } from "../../components/index.js";

function SignIn() {
    const history = useHistory();

    const { firebase } = useFirebaseContext();

    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignIn = (event) => {
        event.preventDefault();

        firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then(() => {
            /**
             * We redirect the user to the Netflix browse screen once the user is Signed In legally.
             * 
             * history.push(BROWSE);        // history.push("/browse"); 
             */
            history.push(BROWSE);

        }).catch((error) => {
            const parseErrorMessage = (errormessage) => {
                /**
                 * @function parseErrorMessage() parse the object given by firebase.
                 *
                 * @argument {String} errormessage is the string that needs to be parsed.
                 *
                 * We are parsing the error message given by Firebase because the firbase given object is something like this,
                 *
                 * {
                 *  code: "auth/internal-error",
                 *    message: "{
                 *  "error": {
                 *  "code": 400,
                 *           "message": "CONFIGURATION_NOT_…T_FOUND",    // Error Message
                 *           "domain": "global",
                 *           "reason": "invalid"
                 *        }
                 *    }",
                 *   a: null
                 * }
                 *
                 * you see the error message is actually a stringified object so we need to parse this object first in order to get 
                 * the actual error message on the screen.
                 *
                 * We implement Exception handling because if the firbase authentication is not enabled then the error message is
                 * something like we show you in the above example otherwise we will be having a error message in the form of a
                 * plain text.
                 *
                 * @return {String} parsed error message if firebase returned a valid JSON string.
                 */
                try {
                    return JSON.parse(errormessage);
                } catch (error) {
                    return false;
                }
            };

            let ErrorMessage = parseErrorMessage(error.message) || error.message;

            setEmail("");
            setPassword("");
            setError(ErrorMessage);
        });
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

                            <FormContainer.Base onSubmit={handleSignIn} method="POST">

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