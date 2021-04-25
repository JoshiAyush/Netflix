import { PROFILE } from "../constants.js";

export function getProfileLink(user, _PROFILE = PROFILE) {
    if (!user || typeof user != "object")
        return _PROFILE;

    if (typeof _PROFILE != "string")
        throw new Error("ARGUMENT_TYPE_MISMATCH");

    let userNameInURL = "";

    user?.displayName.split(" ").forEach((item) => {
        item = item[0].toLowerCase() + item.slice(1);
        userNameInURL += `${item}-`;
    });

    return `${_PROFILE}/${userNameInURL}${user?.uid}`;
};