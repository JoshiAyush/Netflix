import React from "react";
import { render } from "@testing-library/react";

import { LoadingContainer } from "../../components/index.js";

describe("<Loading />", () => {
  it("renders the <Loading /> component", () => {
    const { container, getByTestId } = render(
      <LoadingContainer.Picture
        src="/images/users/1.png"
        data-testid="loading-picture"
      />
    );

    expect(getByTestId("loading-picture")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Loading.ReleaseBody />", () => {
    const { container } = render(<LoadingContainer.ReleaseBody />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
