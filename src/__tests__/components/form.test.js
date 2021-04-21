import React from "react";
import { render } from "@testing-library/react";

import { FormContainer } from "../../components/index.js";

jest.mock("react-router-dom");

describe("<Form />", () => {
    it("renders the <Form /> with populated data", () => {
        const { container, getByText, getByPlaceholderText } = render(
            <FormContainer>

                <FormContainer.Inner>

                    <FormContainer.Title>

                        Sign In Now

                    </FormContainer.Title>

                    <FormContainer.Base>

                        <FormContainer.Input
                            type="email"
                            placeholder="Email Address"
                            autoComplete="on"
                        />

                        <FormContainer.Input
                            type="password"
                            placeholder="Password"
                            autoComplete="on"
                        />

                        <FormContainer.Submit type="submit" disabled>

                            Sign In

                        </FormContainer.Submit>

                    </FormContainer.Base>

                    <FormContainer.Text>

                        New to Netflix?

                    </FormContainer.Text>

                    <FormContainer.TextSmall>

                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.

                    </FormContainer.TextSmall>

                </FormContainer.Inner>

            </FormContainer>
        );

        expect(getByText("This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.")).toBeTruthy();
        expect(getByText("Sign In Now")).toBeTruthy();
        expect(getByText("Sign In").disabled).toBeTruthy();
        expect(getByPlaceholderText("Email Address")).toBeTruthy();
        expect(getByPlaceholderText("Password")).toBeTruthy();

        expect(container.firstChild).toMatchSnapshot();
    });
});