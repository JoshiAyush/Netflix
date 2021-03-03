import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useBrowseContext } from "../../context/StateProvider.js";
import { FeatureStateProvider } from "../../context/StateProvider.js";

import { CardContainer } from "./style/Card.js";


function Card({ slides }) {
    const [slideRows, setSlideRows] = useState([]);

    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    const { category, setCategory } = useBrowseContext();

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    return (
        <FeatureStateProvider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>

            <CardContainer>

                <CardContainer.Group>

                    {
                        slideRows.map(slideItem => (
                            <>
                                <CardContainer.Title>{slideItem.title}</CardContainer.Title>

                                <CardContainer.Entities>
                                    {
                                        slideItem.data.map((item) => (
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

                                <CardContainer.Feature category={category}>

                                    <CardContainer.Player>

                                        <CardContainer.PlayerButton />

                                        <CardContainer.PlayerVideo src="/videos/bunny.mp4" />

                                    </CardContainer.Player>

                                </CardContainer.Feature>
                            </>
                        ))
                    }

                </CardContainer.Group>

            </CardContainer>

        </FeatureStateProvider>
    )
}

export default Card;

