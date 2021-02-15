import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { HomeContainer } from "../Home/style/Home.js";
import { HeaderContainer } from "../../containers/Header/style/Header.js";

import { HOME } from "../../constants.js";
import { SIGN_IN } from "../../constants.js";
import { BROWSE } from "../../constants.js";
import { createPassword } from "../../form.js";
import { FirebaseContext } from "../../context/firebase.js";

import Footer from "../../containers/Footer/index.js";

import { FormContainer } from "../../components/index.js";

function SignIn() {
    const history = useHistory();

    const { firebase } = useContext(FirebaseContext);

    const [userName, setUserName] = useState("");

    const [userEmail, setEmail] = useState("");

    const [userPassword, setPassword] = useState("");

    const [suggestPassword, setSuggestPassword] = useState(false);

    const [usePassword, setUsePassword] = useState("");

    const [error, setError] = useState("");

    const handleSignUp = (event) => {
        event.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then((result) => {
            result.user.updateProfile({
                displayName: userName,
                photoURL: Math.floor(Math.random() * 5) + 1
            }).then(() => {
                history.push(BROWSE);
            }).catch((error) => {
                setUserName("");
                setEmail("");
                setPassword("");
                setError(error.message);
            });
        })
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
                                    onChange={({ target }) => setUserName(target.value)}
                                    autoComplete="on"
                                />

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
                                    onClick={() => {
                                        setUsePassword(createPassword());
                                        setSuggestPassword(true);
                                    }}
                                    onChange={({ target }) => setPassword(target.value)}
                                    autoComplete="on"
                                />

                                {
                                    suggestPassword &&
                                    <FormContainer.SuggestPassword onClick={() => setPassword(usePassword)}>
                                        {usePassword}
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

export default SignIn;