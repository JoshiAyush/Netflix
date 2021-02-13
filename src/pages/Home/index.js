import React from 'react';

import { Header } from "../../containers/index.js";
import { FaqsContainer } from "../../containers/index.js";
import { FooterContainer } from "../../containers/index.js";
import { JumbotronContainer } from "../../containers/index.js";

import { HomeContainer } from "./style/Home.js";

function Home() {
    return (
        <HomeContainer>

            <Header />

            <JumbotronContainer />

            <FaqsContainer />

            <FooterContainer />

        </HomeContainer>
    );
}

export default Home;