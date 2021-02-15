import React from "react";

import { UseContent } from "../../hooks/index.js";
import selectionFilter from "../../utils/selection-filter.js";

import { BrowseContainer } from "./style/Browse.js";


function Browse() {
    const { series } = UseContent("series");
    const { films } = UseContent("films");

    const slides = selectionFilter({ series, films });

    return (
        <BrowseContainer></BrowseContainer>
    );
}

export default Browse;