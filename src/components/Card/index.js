import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

import { CardContainer } from "./style/Card.js";

export const FeatureContext = createContext();

function Card({ slides }) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    const [category, setCategory] = useState("series");
    const [slideRows, setSlideRows] = useState([]);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>

            <CardContainer>

                <CardContainer.Group></CardContainer.Group>

            </CardContainer>

        </FeatureContext.Provider>
    )
}

export default Card;

