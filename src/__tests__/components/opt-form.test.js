import React from "react";
import { render } from "@testing-library/react";

import { OptFormContainer } from "../../components/index.js";

describe("<OptForm />", () => {
  it("renders the <OptForm /> with populated data", () => {
    const { container, getByText, getByPlaceholderText } = render(
      <OptFormContainer>
        <OptFormContainer.Input placeholder="Email address" />

        <OptFormContainer.Button width="32.8%">
          Try it now
        </OptFormContainer.Button>

        <OptFormContainer.Text>
          Ready to watch? Enter your email to create or restart your membership
        </OptFormContainer.Text>
      </OptFormContainer>
    );

    expect(getByText("Try it now")).toBeTruthy();
    expect(
      getByText(
        "Ready to watch? Enter your email to create or restart your membership"
      )
    ).toBeTruthy();
    expect(getByPlaceholderText("Email address")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
