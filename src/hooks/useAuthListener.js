import { useState } from "react";
import { useEffect } from "react";

import { useFirebaseContext } from "../context/StateProvider.js";

function useAuthListener() {
  /**
   * @function useAuthListener() returns the updated user's object.
   *
   * This function updates the user's old object on changing the state of the user's object. This function request the backend for
   * the user profile and if recieved a non-empty object it sets the user to that object and also changes the state of the local
   * storage where the user's profile is saved locally if found nothing e.g., when the user is signed out then it deletes the user
   * from the local storage and sets the user to null object and finally returns the object.
   *
   * @returns {Object} user.
   */
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

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
    });

    return () => listener();
  }, []);

  return { user };
}

export default useAuthListener;
