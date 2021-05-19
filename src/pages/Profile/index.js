import React from "react";

import { HOME } from "../../constants.js";

import { Me } from "../../containers/index.js";
import { HeaderContainer } from "../../containers/index.js";
import { ProfileContainer } from "./style/Profile.js";

function Profile() {
  return (
    <ProfileContainer>
      <ProfileContainer.Head>
        <HeaderContainer bg={false}>
          <HeaderContainer.Logo
            to={HOME}
            src="/images/logo.svg"
            alt="Netflix"
          />
        </HeaderContainer>
      </ProfileContainer.Head>

      <ProfileContainer.Body>
        <Me />
      </ProfileContainer.Body>
    </ProfileContainer>
  );
}

export default Profile;
