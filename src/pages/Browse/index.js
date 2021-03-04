import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import * as ROUTES from "../../constants.js";
import { useContent } from "../../hooks/index.js";
import { useFirebaseContext } from "../../context/StateProvider.js";
import selectionFilter from "../../utils/selection-filter.js";
import { BrowseStateProvider } from "../../context/StateProvider.js";

import { Card } from "../../components/index.js";
import { Loading } from "../../components/index.js";

import { SelectProfile } from "../../containers/index.js";

import { Footer } from "../../containers/index.js";
import { BrowseContainer } from "./style/Browse.js";
import { HeaderContainer } from "../../containers/index.js";
import { LoadingContainer } from "../../components/index.js";

function Browse() {
    const { series } = useContent("series");
    const { films } = useContent("films");

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState("series");

    const { firebase } = useFirebaseContext();

    const user = firebase.auth().currentUser || {};

    const slides = selectionFilter({ series, films });

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile?.displayName]);

    return profile.displayName ? (
        <BrowseStateProvider value={{ category, setCategory }}>

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

                            <HeaderContainer.TextLink
                                active={category === "films" ? true : false}
                                onClick={() => setCategory("films")}
                            >
                                Films
                            </HeaderContainer.TextLink>

                            <HeaderContainer.TextLink
                                active={category === "series" ? true : false}
                                onClick={() => setCategory("series")}
                            >
                                Series
                            </HeaderContainer.TextLink>

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
                                            onClick={() => firebase.auth().signOut()}
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

                <Footer />

            </BrowseContainer>

        </BrowseStateProvider >
    ) : (
            <BrowseContainer>

                <SelectProfile user={user} setProfile={setProfile} />

            </BrowseContainer>
        );
}

export default Browse;