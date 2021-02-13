import React from "react";

import OptForm from "../../components/Opt-Form/index.js";

import { FeatureContainer } from "./style/Feature.js";

function Feature() {
    return (
        <FeatureContainer>

            <FeatureContainer.Title>Unlimited films, TV programmes and more.</FeatureContainer.Title>

            <FeatureContainer.SubTitle>Watch anywhere. Cancel at any time.</FeatureContainer.SubTitle>

            <OptForm />
            
        </FeatureContainer>
    );
}

export default Feature;