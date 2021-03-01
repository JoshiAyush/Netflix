import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

import * as ROUTES from "../../constants.js";
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
    const [searchTerm, setSearchTerm] = useState('');

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

            <HeaderContainer src="joker1" dontShowOnSmallViewPort>

                <HeaderContainer.Frame>

                    <HeaderContainer.Group>

                        <HeaderContainer.Logo to={ROUTES.HOME} src="/images/logo.svg" alt="Netflix"></HeaderContainer.Logo>

                        <HeaderContainer.TextLink>Films</HeaderContainer.TextLink>

                        <HeaderContainer.TextLink>Series</HeaderContainer.TextLink>

                    </HeaderContainer.Group>

                    <HeaderContainer.Group>

                        <HeaderContainer.Group>

                            <HeaderContainer.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                        </HeaderContainer.Group>

                        <HeaderContainer.Profile>

                            <HeaderContainer.Picture src={user?.photoURL} />

                            <HeaderContainer.Dropdown>

                                <HeaderContainer.Group>

                                    <HeaderContainer.Picture src={user?.photoURL} />

                                    <HeaderContainer.TextLink>{user.displayName.split(" ")[0]}</HeaderContainer.TextLink>

                                </HeaderContainer.Group>

                                <HeaderContainer.Group>

                                    <HeaderContainer.TextLink
                                        onCLick={() => firebase.auth().signOut()}
                                    >
                                        Sign Out
                                    </HeaderContainer.TextLink>

                                </HeaderContainer.Group>

                            </HeaderContainer.Dropdown>

                        </HeaderContainer.Profile>

                    </HeaderContainer.Group>

                </HeaderContainer.Frame>

                <HeaderContainer.Feature>

                    <HeaderContainer.FeatureCallOut>Watch Joker Now</HeaderContainer.FeatureCallOut>

                    <HeaderContainer.Text>

                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                        City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                        futile attempt to feel like he's part of the world around him.

                    </HeaderContainer.Text>

                    <HeaderContainer.PlayButton>Play</HeaderContainer.PlayButton>

                </HeaderContainer.Feature>

            </HeaderContainer>

            <Card slides={slides} />

        </BrowseContainer>
    ) : (
            <BrowseContainer>

                <SelectProfile user={user} setProfile={setProfile} />

            </BrowseContainer>
        );
}

export default Browse;