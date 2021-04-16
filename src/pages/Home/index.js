import React from "react";
import { useEffect } from 'react';

import { Faqs } from "../../containers/index.js";
import { Header } from "../../containers/index.js";
import { Footer } from "../../containers/index.js";
import { Jumbotron } from "../../containers/index.js";

import { HomeContainer } from "./style/Home.js";

function Home() {
    useEffect(() => {
        document.getElementById("chrome-title-tab").innerText = "Netflix";
    }, []);

    return (
        <HomeContainer>

            <Header />

            <Jumbotron />

            <Faqs />

            <Footer />

        </HomeContainer>
    );
}

export default Home;