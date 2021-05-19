import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";

import { HOME } from "../../constants.js";
import { SET_CATEGORY } from "../../constants.js";

import { useContent } from "../../hooks/index.js";
import selectionFilter from "../../netflix/utils/selection-filter.js";
import { handleSignOut } from "../../lib/handle-signout.js";
import { getProfileLink } from "../../netflix/utils/get-profile-link.js";

import { useBrowseContext } from "../../context/StateProvider.js";
import { useFirebaseContext } from "../../context/StateProvider.js";

import { Card } from "../../components/index.js";
import { Loading } from "../../components/index.js";

import { Footer } from "../../containers/index.js";
import { SelectProfile } from "../../containers/index.js";
import { BrowseContainer } from "./style/Browse.js";
import { HeaderContainer } from "../../containers/index.js";
import { LoadingContainer } from "../../components/index.js";

function Browse() {
  const history = useHistory();

  const { films } = useContent("films");
  const { series } = useContent("series");

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [dropDownActive, setDropDownActive] = useState(false);

  const { firebase } = useFirebaseContext();

  const user = firebase.auth().currentUser || {};

  const slides = selectionFilter({ series, films });

  const [{ category }, dispatch] = useBrowseContext();

  useEffect(() => {
    if (series.length > 0 || films.length > 0) setLoading(false);
  }, [profile?.displayName, series, films]);

  useEffect(() => {
    document.getElementById("chrome-title-tab").innerText =
      "Browse 11+ million movies and series";
  }, []);

  return profile.displayName ? (
    <BrowseContainer>
      {loading ? (
        <Loading
          src={
            user?.photoURL
              ? `/images/users/${user?.photoURL}.png`
              : "/images/misc/loading.gif"
          }
          alt="user"
        />
      ) : (
        <LoadingContainer.ReleaseBody />
      )}

      <HeaderContainer src="joker1" dontShowOnSmallViewPort>
        <HeaderContainer.Frame>
          <HeaderContainer.Group>
            <HeaderContainer.Logo
              to={HOME}
              src="/images/logo.svg"
              alt="Netflix"
            ></HeaderContainer.Logo>

            <HeaderContainer.TextLink
              active={category === "films" ? true : false}
              onClick={() =>
                dispatch({ type: SET_CATEGORY, category: "films" })
              }
            >
              Films
            </HeaderContainer.TextLink>

            <HeaderContainer.TextLink
              active={category === "series" ? true : false}
              onClick={() =>
                dispatch({ type: SET_CATEGORY, category: "series" })
              }
            >
              Series
            </HeaderContainer.TextLink>
          </HeaderContainer.Group>

          <HeaderContainer.Group>
            <HeaderContainer.Group>
              <HeaderContainer.Search />
            </HeaderContainer.Group>

            <HeaderContainer.Profile>
              <HeaderContainer.Picture
                onClick={() => setDropDownActive(!dropDownActive)}
                src={user?.photoURL}
              />

              <HeaderContainer.Dropdown active={dropDownActive}>
                <HeaderContainer.Group
                  onClick={() => history.push(getProfileLink(user))}
                >
                  <HeaderContainer.Picture src={user?.photoURL} />

                  <HeaderContainer.TextLink>
                    {user.displayName.split(" ")[0]}
                  </HeaderContainer.TextLink>
                </HeaderContainer.Group>

                <HeaderContainer.Group>
                  <HeaderContainer.TextLink onClick={() => handleSignOut()}>
                    Sign Out
                  </HeaderContainer.TextLink>
                </HeaderContainer.Group>
              </HeaderContainer.Dropdown>
            </HeaderContainer.Profile>
          </HeaderContainer.Group>
        </HeaderContainer.Frame>

        <HeaderContainer.Feature>
          <HeaderContainer.FeatureCallOut>
            Watch Joker Now
          </HeaderContainer.FeatureCallOut>

          <HeaderContainer.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </HeaderContainer.Text>

          <HeaderContainer.PlayButton>Play</HeaderContainer.PlayButton>
        </HeaderContainer.Feature>
      </HeaderContainer>

      <Card slides={slides} />

      <Footer />
    </BrowseContainer>
  ) : (
    <BrowseContainer>
      <SelectProfile user={user} setProfile={setProfile} />
    </BrowseContainer>
  );
}

export default Browse;
