import { firebase } from "./firebase.prod.js";

export function handleSignUp({ userName = null, userEmail, userPassword } = {}, setError = null) {
    if (typeof userEmail != "string" || typeof userPassword != "string" || (userName && typeof userName != "string"))
        throw new Error("ARGUMENT_TYPE_MISMATCH");

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then((result) => {
        if (userName == null)
            return true;

        result.user.updateProfile({
            displayName: userName,
            photoURL: Math.floor(Math.random() * 5) + 1
        }).then(() => {
            return true;
        }).catch((err) => {
            if (setError != null)
                setError(err.message);
            return false;
        });
    }).catch((err) => {
        if (setError != null)
            setError(err.message);
        return false;
    });
};