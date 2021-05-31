import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Player } from "../index.js";

import { getSearchedResults } from "../../netflix/Fuse/index.js";

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
    const results = getSearchedResults(
      slideRows,
      { keys: ["data.description", "data.title", "data.genre"] },
      searchTerm
    );

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return slideRows[0]?.data.length > 0 ? (
    <FeatureStateProvider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <CardContainer>
        <CardContainer.Group>
          {slideRows.map((slideItem) => (
            <>
              {slideItem.data.length > 0 && (
                <CardContainer.Title>{slideItem.title}</CardContainer.Title>
              )}

              <CardContainer.Entities>
                {slideItem.data.map((item) => (
                  <CardContainer.Item
                    key={item.docId}
                    item={item}
                    data-testid={`${item.slug}--feautre`}
                  >
                    <CardContainer.Image
                      src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                    />

                    <CardContainer.Meta>
                      <CardContainer.Subtitle>
                        {item.title}
                      </CardContainer.Subtitle>

                      <CardContainer.Text>
                        {item.description}
                      </CardContainer.Text>
                    </CardContainer.Meta>
                  </CardContainer.Item>
                ))}
              </CardContainer.Entities>

              <CardContainer.Feature category={category}>
                <Player src="/videos/bunny.mp4" />
              </CardContainer.Feature>
            </>
          ))}
        </CardContainer.Group>
      </CardContainer>
    </FeatureStateProvider>
  ) : (
    <></>
  );
}

export default Card;
