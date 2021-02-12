import React from 'react';

import faqsData from "../../fixtures/faqs.json";

import { OptForm } from "../../components/index.js";
import { Accordion } from "../../components/index.js";

function FaqsContainer() {
    return (
        <Accordion>

            <Accordion.Title>Frequently Asked Question</Accordion.Title>
            
            {
                faqsData.map(item => (
            
                    <Accordion.Item key={item.id}>

                        <Accordion.Header>{item.header}</Accordion.Header>

                        <Accordion.Body>{item.body}</Accordion.Body>

                    </Accordion.Item>
                ))
            }

            <Accordion.Item />

            <OptForm>
            
                <OptForm.Input placeholder="Email address" />
            
                <OptForm.Button>Try it now</OptForm.Button>
            
                <OptForm.Text>
            
                    Ready to watch? Enter your email to create or restart your membership
            
                </OptForm.Text>
            
            </OptForm>
            
        </Accordion>
    );
}

export default FaqsContainer;