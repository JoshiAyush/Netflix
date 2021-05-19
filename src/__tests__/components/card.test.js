import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { CardContainer } from "../../components/index.js";

const category = "series";

const slideRows = [
  {
    title: "Documentaries",
    data: [
      {
        genre: "documentaries",
        maturity: "18",
        slug: "tiger-king",
        description: "Tiger King description",
        id: "07adcf19-517f-41b4-8f8b-04fee694bce1",
        title: "Tiger King",
        docId: "IcRxJBanzE7nmIp2GMGb"
      }
    ]
  },
  {
    title: "Feel Good",
    data: [
      {
        title: "Juno",
        genre: "feel-good",
        description: "Juno description",
        maturity: "0",
        id: "a938b5a6-fe25-4a06-8050-353bc7146ccd",
        slug: "juno",
        docId: "4JDgdf5vE0K3YrW9ZnbP"
      }
    ]
  }
];

describe("<Card />", () => {
  it("renders the <Card /> with populated data", () => {
    const { container, getByText } = render(
      slideRows.map((slideItem) => (
        <>
          <CardContainer.Title>{slideItem.title}</CardContainer.Title>

          <CardContainer.Entities>
            {slideItem.data.map((item) => (
              <CardContainer.Item
                key={item.docId}
                item={item}
                data-testid={`${item.slug}--feautre`}
              >
                <CardContainer.Image
                  src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                />

                <CardContainer.Meta>
                  <CardContainer.Subtitle>{item.title}</CardContainer.Subtitle>

                  <CardContainer.Text>{item.description}</CardContainer.Text>
                </CardContainer.Meta>
              </CardContainer.Item>
            ))}
          </CardContainer.Entities>
        </>
      ))
    );

    expect(getByText("Documentaries")).toBeTruthy();
    expect(getByText("Tiger King")).toBeTruthy();
    expect(getByText("Tiger King description")).toBeTruthy();

    expect(getByText("Feel Good")).toBeTruthy();
    expect(getByText("Juno")).toBeTruthy();
    expect(getByText("Juno description")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
