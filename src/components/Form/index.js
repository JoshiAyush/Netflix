import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { BROWSE } from "../../constants.js";
import { SIGN_UP } from "../../constants.js";
import { FirebaseContext } from "../../context/firebase.js";

import { FormContainer } from "./style/Form.js";

function Form() {
    const history = useHistory();

    const { firebase } = useContext(FirebaseContext);

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
                 * We are parsing the error message given by Firebase because the firbase given object is
                 * something like this,
                 * 
                 * {
                 *   code: "auth/internal-error", 
                 *   message: "{
                 *      "error": {
                 *          "code": 400,
                 *          "message": "CONFIGURATION_NOT_…T_FOUND",    // Error Message
                 *          "domain": "global",
                 *          "reason": "invalid"
                 *       }
                 *   }",
                 *   a: null
                 * }
                 *
                 * you see the error message is actually a stringified object so we need to parse this object
                 * first in order to get the actual error message on the screen.
                 * 
                 * We implement Exception handling because if the firbase authentication is not enabled then the
                 * error message is something like we show you in the above example otherwise we will be having a
                 * error message in the form of a plain text.
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
                        autoComplete="on"
                    />

                    <FormContainer.Input
                        type="password"
                        placeHolder="Password"
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
    );
}

export default Form;