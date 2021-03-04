import React from 'react';

import faqsData from "../../fixtures/faqs.json";

import { OptFormContainer } from "../../components/index.js";
import { AccordionContainer } from "../../components/index.js";

import { FaqsContainer } from "./style/FAQS.js";

function Faqs() {
    return (
        <FaqsContainer>

            <AccordionContainer>

                <AccordionContainer.Title>Frequently Asked Question</AccordionContainer.Title>

                {
                    faqsData.map(item => (

                        <AccordionContainer.Item key={item.id}>

                            <AccordionContainer.Header>{item.header}</AccordionContainer.Header>

                            <AccordionContainer.Body>{item.body}</AccordionContainer.Body>

                        </AccordionContainer.Item>
                    ))
                }

                <AccordionContainer.Item />

                <OptFormContainer>

                    <OptFormContainer.Input placeholder="Email address" />

                    <OptFormContainer.Button>Try it now</OptFormContainer.Button>

                    <OptFormContainer.Text>

                        Ready to watch? Enter your email to create or restart your membership

                    </OptFormContainer.Text>

                </OptFormContainer>

            </AccordionContainer>

        </FaqsContainer>
    );
}

export default Faqs;