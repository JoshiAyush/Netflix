export function isUrl(string) {
    if (typeof string != "string")
        return false;

    let pattern = new RegExp(
        '^(https?:\\/\\/)?' +                                       /** Protocol. */
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +        /** Domain name. */
        '((\\d{1,3}\\.){3}\\d{1,3}))' +                             /** OR ip (v4) address. */
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +                         /** Port and path. */
        '(\\?[;&a-z\\d%_.~+=-]*)?' +                                /** Query string. */
        '(\\#[-a-z\\d_]*)?$', 'i'                                   /** Fragment locator. */
    );

    return pattern.test(string);
}

export function windowsPathValidation(constwinpath) {
    if (typeof constwinpath != "string")
        return false;

    if ((constwinpath.charAt(0) !== "\\" || constwinpath.charAt(1) !== "\\") || (constwinpath.charAt(0) !== "/" || constwinpath.charAt(1) !== "/")) {
        if (!constwinpath.charAt(0).match(/^[a-zA-Z]/))
            return false;

        if (!constwinpath.charAt(1).match(/^[:]/) || !constwinpath.charAt(2).match(/^[\/\\]/))
            return false;
    }

    return true;
}

export function linuxPathValidation(constlinuxpath) {
    if (typeof constlinuxpath != "string")
        return false;

    for (let i = 0; i < constlinuxpath.length; i++) {
        if (constlinuxpath.charAt(i).match(/^[\\]$/))
            return false;
    }

    if (constlinuxpath.charAt(0) !== "/")
        return false;

    if (constlinuxpath.charAt(0) === "/" && constlinuxpath.charAt(1) === "/")
        return false;

    return true;
}