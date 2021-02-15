import React from "react";

import * as ROUTES from "../../constants.js";

import { HeaderContainer } from "../index.js";

import { SelectProfileContainer } from "./style/Profiles.js";

function SelectProfile({ user, setProfile }) {
    return (
        <SelectProfileContainer>

            <HeaderContainer bg={false}>

                <HeaderContainer.Frame>

                    <HeaderContainer.Logo to={ROUTES.HOME} src="/images/logo.svg" alt="Netflix" />

                </HeaderContainer.Frame>

            </HeaderContainer>

            <SelectProfileContainer.Inner>

                <SelectProfileContainer.Title>Who's watching?</SelectProfileContainer.Title>

                <SelectProfileContainer.List>

                    <SelectProfileContainer.User
                        onClick={() => setProfile({
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        })}
                    >

                        <SelectProfileContainer.Picture
                            src={user?.photoURL ? `/images/users/${user?.photoURL}.png` : undefined}
                            alt="user"
                        />

                        <SelectProfileContainer.Name>{user?.displayName}</SelectProfileContainer.Name>

                    </SelectProfileContainer.User>

                </SelectProfileContainer.List>

            </SelectProfileContainer.Inner>

        </SelectProfileContainer>
    );
}

export default SelectProfile;