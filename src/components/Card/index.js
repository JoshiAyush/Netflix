import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

import { CardContainer } from "./style/Card.js";

import { BrowseContext } from "../../pages/Browse/index.js";

export const FeatureContext = createContext();

function Card({ slides }) {
    const [slideRows, setSlideRows] = useState([]);

    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    const { category, setCategory } = useContext(BrowseContext);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>

            <CardContainer>

                <CardContainer.Group>

                    {
                        slideRows.map(slideItem => (
                            <>
                                <CardContainer.Title>{slideItem.title}</CardContainer.Title>

                                <CardContainer.Entities>
                                    {
                                        slideItem.data.map(item => {
                                            console.log("I am your item", item);
                                        })
                                    }
                                    {
                                        slideItem.data.map(item => (
                                            <CardContainer.Item key={item.docId} item={item}>

                                                <CardContainer.Image
                                                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                                                />

                                                <CardContainer.Meta>

                                                    <CardContainer.Subtitle>{item.title}</CardContainer.Subtitle>

                                                    <CardContainer.Text>{item.description}</CardContainer.Text>

                                                </CardContainer.Meta>

                                            </CardContainer.Item>
                                        ))
                                    }
                                </CardContainer.Entities>
                            </>
                        ))
                    }

                </CardContainer.Group>

            </CardContainer>

        </FeatureContext.Provider>
    )
}

export default Card;

