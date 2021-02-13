import React from "react";
import { useState } from "react";

import { SIGN_UP } from "../../constants.js";

import { FormContainer } from "./style/Form.js";

function Form() {
    const [userEmail, setEmail] = useState();
    const [userPassword, setPassword] = useState();
    const [error, setError] = useState("");

    const handleSignIn = (event) => {
        event.preventDefault();

        /* Firebase stuff */
    };

    const IsInvalid = userPassword === "" || userEmail === "";

    return (
        <FormContainer>

            <FormContainer.Inner>

                <FormContainer.Title>

                    Sing In

                </FormContainer.Title>

                {error && <FormContainer.Error>{error}</FormContainer.Error>}

                <FormContainer.Base onSubmit={handleSignIn} method="POST">

                    <FormContainer.Input
                        type="email"
                        placeHolder="Email Address"
                        value={userEmail}
                        onChange={({ target }) => setEmail(target.value)}
                        autoComplete="off"
                    />

                    <FormContainer.Input
                        type="password"
                        placeHolder="Password"
                        value={userPassword}
                        onChange={({ target }) => setPassword(target.value)}
                        autoComplete="off"
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
    );
}

export default Form;