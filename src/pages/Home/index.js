import React from 'react';

import { OptForm } from "../../components/index.js";

import { FaqsContainer } from "../../containers/index.js";
import { FooterContainer } from "../../containers/index.js";
import { HeaderContainer } from "../../containers/index.js";
import { JumbotronContainer } from "../../containers/index.js";

import Feature from '../components/feature';

function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button width="32.8%">Try it now</OptForm.Button>
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or restart your membership
                        </OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}

export default Home;