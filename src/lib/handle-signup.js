export function handleSignUp(firebase, { userName, userEmail, userPassword }) {
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then((result) => {
        if (userName == null)
            return "SIGNED_UP";

        result.user.updateProfile({
            displayName: userName,
            photoURL: Math.floor(Math.random() * 5) + 1
        }).then(() => "SIGNED_UP")
            .catch((err) => {
                window.alert(err.message);
            });
    }).catch((err) => err.message);
};