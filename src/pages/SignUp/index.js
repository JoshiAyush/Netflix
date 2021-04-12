import React from "react";
import { useHistory } from "react-router-dom";

import { HomeContainer } from "../Home/style/Home.js";
import { HeaderContainer } from "../../containers/Header/style/Header.js";

import { HOME } from "../../constants.js";
import { BROWSE } from "../../constants.js";
import { SIGN_IN } from "../../constants.js";

import { ERROR } from "../../constants.js";
import { USE_PASSWORD } from "../../constants.js";
import { SET_USER_NAME } from "../../constants.js";
import { SET_USER_EMAIL } from "../../constants.js";
import { SUGGEST_PASSWORD } from "../../constants.js";
import { SET_USER_PASSWORD } from "../../constants.js";
import { PASSWORD_SUGGESTED } from "../../constants.js";

import { createPassword } from "../../form.js";
import { useSignUpContext } from "../../context/StateProvider.js";
import { useFirebaseContext } from "../../context/StateProvider.js";

import Footer from "../../containers/Footer/index.js";

import { FormContainer } from "../../components/index.js";

function SignUp() {
    const history = useHistory();

    const { firebase } = useFirebaseContext();

    const [{
        error,
        userName,
        userEmail,
        usePassword,
        userPassword,
        suggestPassword,
        passwordSuggested
    }, dispatch] = useSignUpContext();

    const handleSignUp = (event) => {
        event.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then((result) => {
            result.user.updateProfile({
                displayName: userName,
                photoURL: Math.floor(Math.random() * 5) + 1
            }).then(() => {
                history.push(BROWSE);
            }).catch((error) => {
                dispatch({ type: SET_USER_NAME, userName: "" });
                dispatch({ type: SET_USER_EMAIL, userEmail: "" });
                dispatch({ type: SET_USER_PASSWORD, userPassword: "" });
                dispatch({ type: ERROR, error: error.message });
            });
        });
    };

    const IsInvalid = userName === "" || userEmail === "" || userPassword === "";

    return (
        <HomeContainer>

            <HeaderContainer>

                <HeaderContainer.Frame>

                    <HeaderContainer.Logo to={HOME} src="/images/logo.svg" alt="Netflix" />

                    <HeaderContainer.Button to={SIGN_IN}>Sign In</HeaderContainer.Button>

                </HeaderContainer.Frame>

                <HeaderContainer.Container>

                    <FormContainer>

                        <FormContainer.Inner>

                            <FormContainer.Title>

                                Sign Up

                            </FormContainer.Title>

                            {error && <FormContainer.Error>{error}</FormContainer.Error>}

                            <FormContainer.Base onSubmit={handleSignUp} method="POST">

                                <FormContainer.Input
                                    type="text"
                                    placeholder="Full Name"
                                    value={userName}
                                    onChange={({ target }) => dispatch({ type: SET_USER_NAME, userName: target.value })}
                                    autoComplete="on"
                                />

                                <FormContainer.Input
                                    type="email"
                                    placeholder="Email Address"
                                    value={userEmail}
                                    onChange={({ target }) => dispatch({ type: SET_USER_EMAIL, userEmail: target.value })}
                                    autoComplete="on"
                                />

                                <FormContainer.Input
                                    type="password"
                                    placeholder="Password"
                                    value={userPassword}
                                    onClick={() => {
                                        if (passwordSuggested === false) {
                                            dispatch({ type: USE_PASSWORD, usePassword: createPassword() });
                                            dispatch({ type: SUGGEST_PASSWORD, suggestPassword: true });
                                            dispatch({ type: PASSWORD_SUGGESTED, passwordSuggested: true });
                                        }
                                    }}
                                    onChange={({ target }) => dispatch({ type: SET_USER_PASSWORD, userPassword: target.value })}
                                    autoComplete="on"
                                />

                                {
                                    suggestPassword &&
                                    <FormContainer.SuggestPassword
                                        onClick={() => {
                                            dispatch({ type: SET_USER_PASSWORD, userPassword: usePassword });
                                            dispatch({ type: SUGGEST_PASSWORD, suggestPassword: false });
                                        }}
                                    >
                                        Use suggested password

                                        <FormContainer.Span>{usePassword}</FormContainer.Span>

                                        <FormContainer.P>
                                            Don't worry Google will save this password for you, you don't have to remember this.
                                        </FormContainer.P>

                                    </FormContainer.SuggestPassword>
                                }

                                <FormContainer.Submit disabled={IsInvalid} type="submit">

                                    Sign Up

                                </FormContainer.Submit>

                            </FormContainer.Base>

                            <FormContainer.Text>

                                Already have an account? <FormContainer.Link to={SIGN_IN}>Sign In.</FormContainer.Link>

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

export default SignUp;