import React from "react";
import EditIcon from "@material-ui/icons/Edit";

import { handleSignOut } from "../../lib/handle-signout.js";

import { useFirebaseContext } from "../../context/StateProvider.js";

import { MeContainer } from "./style/Me.js";

function Me() {
    const { firebase } = useFirebaseContext();

    const user = firebase.auth().currentUser || {};

    return (
        <MeContainer>

            <MeContainer.Holder>

                <MeContainer.Profile>

                    <MeContainer.UserImage src={`/images/users/${user?.photoURL}.png`} alt={"user"} />

                    <MeContainer.Edit>

                        <EditIcon />

                    </MeContainer.Edit>

                    <span>{user?.displayName}</span>

                </MeContainer.Profile>

            </MeContainer.Holder>

            <MeContainer.Button type={"edit"}>Edit Profile</MeContainer.Button>

            <MeContainer.Button type={"signout"} onClick={() => handleSignOut()}>Sign Out</MeContainer.Button>

        </MeContainer>
    );
}

export default Me;