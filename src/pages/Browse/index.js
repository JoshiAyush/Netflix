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
import { LoadingContainer } from "../../components/index.js";
import { HeaderContainer } from "../../containers/index.js";


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
    }, [profile?.displayName]);

    return profile.displayName ? (
        <BrowseContainer>

            {
                loading ? (

                    <Loading
                        src={user?.photoURL ? `/images/users/${user?.photoURL}.png` : '/images/misc/loading.gif'}
                        alt="user"
                    />

                ) : (
                        <LoadingContainer.ReleaseBody />
                    )
            }

            <HeaderContainer src="joker1">

                

            </HeaderContainer>

        </BrowseContainer>
    ) : (
            <BrowseContainer>

                <SelectProfile user={user} setProfile={setProfile} />

            </BrowseContainer>
        );
}

export default Browse;