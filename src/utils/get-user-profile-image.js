import { firebase } from "../lib/firebase.prod.js";

import { isUrl } from "./path.js";
import { linuxPathValidation } from "./path.js";
import { windowsPathValidation } from "./path.js";

function isNumber(value) {
    if (typeof value != "string")
        return false;

    return /^\d+$/.test(value);
}

function isFilePath(photoUrl) {
    if (typeof photoUrl != "string")
        return false;

    return linuxPathValidation(photoUrl) || windowsPathValidation(photoUrl);
}

function createUrlFromLocalImages(photoUrl) {
    return `/images/users/${photoUrl}.png`;
}

export function getUserProfileImageUrl() {
    const user = firebase.auth().currentUser || {};

    if (user == null)
        return "";

    const photo = user?.photoURL;

    if (isNumber(photo))
        return createUrlFromLocalImages(photo);

    if (isUrl(photo))
        return photo;

    if (isFilePath(photo))
        return photo;

    return "";
}