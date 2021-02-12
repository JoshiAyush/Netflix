import React from "react";

import { FeatureContainer } from "./style/Feature.js";

function Feature({ children, ...restProps }) {
    return <FeatureContainer {...restProps}>{children}</FeatureContainer>;
}

export default Feature;