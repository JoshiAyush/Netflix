import React from "react";
import { render, fireEvent } from "@testing-library/react";

import faqsData from "../../fixtures/faqs.json";

import { Faqs } from "../../containers/index.js";

describe("<Accordion />", () => {
    it("renders the <Accordion /> with populated data", () => {
        const { container, getByText } = render(
            <Faqs />
        );

        expect(getByText("Frequently Asked Question")).toBeTruthy();
        expect(getByText("What is Netflix?")).toBeTruthy();
        expect(getByText("How much does Netflix cost?")).toBeTruthy();
        expect(getByText("Where can I watch?")).toBeTruthy();
        expect(getByText("How do I cancel?")).toBeTruthy();
        expect(getByText("What can I watch on Netflix?")).toBeTruthy();

        expect(container.firstChild).toMatchSnapshot();
    });

    it("opens and closes the <Accordion /> component", () => {
        const { container, queryByText } = render(
            <Faqs />
        );

        const whatIsNetflixBodyText = faqsData.filter(item => item.header == "What is Netflix?")[0].body;

        expect(queryByText(whatIsNetflixBodyText)).toBeFalsy();
        fireEvent.click(queryByText("What is Netflix?"));
        expect(queryByText(whatIsNetflixBodyText)).toBeTruthy();
        fireEvent.click(queryByText("What is Netflix?"));
        expect(queryByText(whatIsNetflixBodyText)).toBeFalsy();

        expect(container.firstChild).toMatchSnapshot();
    });
});
