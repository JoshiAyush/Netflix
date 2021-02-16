import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

import { UseContent } from "../../hooks/index.js";
import { FirebaseContext } from "../../context/firebase.js";
import selectionFilter from "../../utils/selection-filter.js";

import { Loading } from "../../components/index.js";

import { SelectProfile } from "../../containers/index.js";

import { BrowseContainer } from "./style/Browse.js";
import { LoadingContainer } from "../../components/Loading/style/Loading.js";


function Browse() {
    const { series } = UseContent("series");
    const { films } = UseContent("films");

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);

    const { firebase } = useContext(FirebaseContext);

    const user = firebase.auth().currentUser || {};

    const slides = selectionFilter({ series, films });

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    return profile.displayName ? (
        loading ? (
            <BrowseContainer>

                <Loading src="/images/misc/loading.gif" />

            </BrowseContainer>
        ) : (
                <LoadingContainer.ReleaseBody />
            )
    ) : (
            <BrowseContainer>

                <SelectProfile user={user} setProfile={setProfile} />

            </BrowseContainer>
        );
}

export default Browse;