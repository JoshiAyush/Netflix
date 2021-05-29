import React from "react";
import { render } from "@testing-library/react";

import { SelectProfileContainer } from "../../containers/index.js";

describe("<SelectProfile />", () => {
  it("renders the <SelectProfile /> with populated data", () => {
    const { container, getByText, getByTestId } = render(
      <SelectProfileContainer.Inner>
        <SelectProfileContainer.Title>
          Who's watching?
        </SelectProfileContainer.Title>

        <SelectProfileContainer.List>
          <SelectProfileContainer.User onClick={() => {}}>
            <SelectProfileContainer.Picture
              src="/images/users/1.png"
              alt="user"
              data-testid="profile-picture"
            />

            <SelectProfileContainer.Name>
              Ayush Joshi
            </SelectProfileContainer.Name>
          </SelectProfileContainer.User>
        </SelectProfileContainer.List>
      </SelectProfileContainer.Inner>
    );

    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId("profile-picture")).toBeTruthy();
    expect(getByText("Ayush Joshi")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <SelectProfile /> with populated data but with misc profile image", () => {
    const { container, getByText, getByTestId } = render(
      <SelectProfileContainer.Inner>
        <SelectProfileContainer.Title>
          Who's watching?
        </SelectProfileContainer.Title>

        <SelectProfileContainer.List>
          <SelectProfileContainer.User onClick={() => {}}>
            <SelectProfileContainer.Picture data-testid="profile-picture-misc" />

            <SelectProfileContainer.Name>
              Ayush Joshi
            </SelectProfileContainer.Name>
          </SelectProfileContainer.User>
        </SelectProfileContainer.List>
      </SelectProfileContainer.Inner>
    );

    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId("profile-picture-misc")).toBeTruthy();
    expect(getByText("Ayush Joshi")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
