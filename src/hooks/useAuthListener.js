import { useState } from "react";
import { useEffect } from "react";

import { useFirebaseContext } from "../context/StateProvider.js";

function useAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")));

    const { firebase } = useFirebaseContext();

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                localStorage.setItem("authUser", JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem("authUser");
                setUser(null);
            }
        })

        return () => listener();
    }, []);

    return { user };
}

export default useAuthListener;