import { PROFILE } from "../constants.js";

export function getProfileLink(user, _PROFILE = PROFILE) {
    if (!user || typeof user != "object")
        return _PROFILE;

    if (typeof _PROFILE != "string")
        throw new Error("ARGUMENT_TYPE_MISMATCH");

    return `${_PROFILE.slice(0, _PROFILE.indexOf("-"))}${user?.uid}`;
};