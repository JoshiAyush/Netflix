import React from "react";
import Fuse from "fuse.js";
import { useState } from "react";
import { useEffect } from "react";

import { Player } from "../index.js";

import { useBrowseContext } from "../../context/StateProvider.js";
import { FeatureStateProvider } from "../../context/StateProvider.js";

import { CardContainer } from "./style/Card.js";


function Card({ slides }) {
    const [slideRows, setSlideRows] = useState([]);

    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    const [{ category, searchTerm }, dispatch] = useBrowseContext();

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    useEffect(() => {
        const fuse = new Fuse(slideRows, {
            keys: ['data.description', 'data.title', 'data.genre'],
        });

        const results = fuse.search(searchTerm).map(({ item }) => item);

        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    }, [searchTerm]);

    return slides ? (
        <FeatureStateProvider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>

            <CardContainer>

                <CardContainer.Group>

                    {
                        slideRows.map(slideItem => (
                            <>
                                {slideItem.data.length > 0 && <CardContainer.Title>{slideItem.title}</CardContainer.Title>}

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

                                    <Player src="/videos/bunny.mp4" />

                                </CardContainer.Feature>
                            </>
                        ))
                    }

                </CardContainer.Group>

            </CardContainer>

        </FeatureStateProvider>
    ) : <></>;
}

export default Card;

