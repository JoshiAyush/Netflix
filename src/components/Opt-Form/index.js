import React from "react";

import { OptFormContainer } from "./style/Opt-Form.js";

function OptForm() {
    return (
        <OptFormContainer>

            <OptFormContainer.Input placeholder="Email address" />

            <OptFormContainer.Button width="32.8%">Try it now</OptFormContainer.Button>

            <OptFormContainer.Text>

                Ready to watch? Enter your email to create or restart your membership

            </OptFormContainer.Text>

        </OptFormContainer>
    );
}

export default OptForm;