import React from "react";
import { useHistory } from "react-router";
import EditIcon from "@material-ui/icons/Edit";

import { SIGN_IN } from "../../constants.js";

import { handleSignOut } from "../../lib/handle-signout.js";
import { getFirebaseUser } from "../../lib/firebase-user.js";
import { getUserProfileImageUrl } from "../../netflix/utils/get-user-profile-image.js";

import { MeContainer } from "./style/Me.js";

function Me() {
  const history = useHistory();
  const displayName = getFirebaseUser()?.displayName;

  async function signOut() {
    await handleSignOut();
    history.push(SIGN_IN);
  }

  return (
    <MeContainer>
      <MeContainer.Holder>
        <MeContainer.Profile>
          <MeContainer.UserImage src={getUserProfileImageUrl()} alt={"user"} />

          <MeContainer.Edit>
            <EditIcon />
          </MeContainer.Edit>

          <span>{displayName}</span>
        </MeContainer.Profile>
      </MeContainer.Holder>

      <MeContainer.Button type={"edit"}>Edit Profile</MeContainer.Button>

      <MeContainer.Button type={"signout"} onClick={() => signOut()}>
        Sign Out
      </MeContainer.Button>
    </MeContainer>
  );
}

export default Me;
