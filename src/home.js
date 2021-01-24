import React from 'react';

import { FaqsContainer } from './faqs';
import { FooterContainer } from './footer';
import { HeaderContainer } from './header';
import { JumbotronContainer } from './jumbotron';

export default function Home() {
    return (
        <>
            <HeaderContainer />
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}