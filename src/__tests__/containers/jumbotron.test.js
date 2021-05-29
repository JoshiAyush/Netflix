import React from "react";
import { render } from "@testing-library/react";

import jumboData from "../../fixtures/jumbo.json";

import { JumbotronContainer } from "../../containers/index.js";

describe("<Jumbotron />", () => {
  it("renders the <Jumbotron /> with populated data", () => {
    const { container, getByText, getByAltText, getByTestId } = render(
      <JumbotronContainer.Container>
        {jumboData.map((item) => (
          <JumbotronContainer key={item.id} direction={item.direction}>
            <JumbotronContainer.Pane>
              <JumbotronContainer.Title>{item.title}</JumbotronContainer.Title>

              <JumbotronContainer.SubTitle>
                {item.subTitle}
              </JumbotronContainer.SubTitle>
            </JumbotronContainer.Pane>

            <JumbotronContainer.Pane>
              <JumbotronContainer.Image
                src={item.image}
                alt={item.alt}
                data-testid={`${item.id}--jumbo--image`}
              />
            </JumbotronContainer.Pane>
          </JumbotronContainer>
        ))}
      </JumbotronContainer.Container>
    );

    expect(getByText("Enjoy on your TV.")).toBeTruthy();
    expect(getByAltText("Tiger King on Netflix")).toBeTruthy();
    expect(getByTestId("1--jumbo--image")).toBeTruthy();
    expect(
      getByText(
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
      )
    ).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
