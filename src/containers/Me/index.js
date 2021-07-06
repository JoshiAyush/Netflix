import React from "react";
import { useHistory } from "react-router";

import WebIcon from "@material-ui/icons/Web";
import EditIcon from "@material-ui/icons/Edit";
import CodeIcon from "@material-ui/icons/Code";
import MemoryIcon from "@material-ui/icons/Memory";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import SettingsSystemDaydreamIcon from "@material-ui/icons/SettingsSystemDaydream";

import { SIGN_IN } from "../../constants.js";

import { getOsInformation } from "../../netflix/browser/GUI/browser.js";
import { getCpuInformation } from "../../netflix/browser/GUI/browser.js";
import { getDeviceInformation } from "../../netflix/browser/GUI/browser.js";
import { getEngineInformation } from "../../netflix/browser/GUI/browser.js";
import { getBrowserInformation } from "../../netflix/browser/GUI/browser.js";

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

      <MeContainer.Divider />

      <MeContainer.UserInfo>
        {getBrowserInformation() && (
          <span>
            <WebIcon />
            <span>{getBrowserInformation()}</span>
          </span>
        )}
        {getOsInformation() && (
          <span>
            <SettingsSystemDaydreamIcon />
            <span>{getOsInformation()}</span>
          </span>
        )}
        {getCpuInformation() && (
          <span>
            <MemoryIcon />
            <span>{getCpuInformation()}</span>
          </span>
        )}
        {getDeviceInformation() && (
          <span>
            <DesktopMacIcon />
            <span>{getDeviceInformation()}</span>
          </span>
        )}
        {getEngineInformation() && (
          <span>
            <CodeIcon />
            <span>{getEngineInformation()}</span>
          </span>
        )}
      </MeContainer.UserInfo>
    </MeContainer>
  );
}

export default Me;
