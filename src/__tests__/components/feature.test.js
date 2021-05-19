import React from "react";
import { render } from "@testing-library/react";

import { Feature } from "../../components/index.js";

describe("<Feature />", () => {
  it("renders the <Feature /> with populated data", () => {
    const { container, getByText } = render(<Feature />);

    expect(getByText("Unlimited films, TV programmes and more.")).toBeTruthy();
    expect(getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
