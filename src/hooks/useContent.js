import { useState } from "react";
import { useEffect } from "react";

import { useFirebaseContext } from "../context/StateProvider.js";

function useContent(target) {
    /**
     * @function UseContent() returns a object with the target (series) content.
     * 
     * @argument {String} target is the collection that we need to use.
     * 
     * @returns 
     */
    const [content, setContent] = useState([]);

    const { firebase } = useFirebaseContext();

    useEffect(() => {
        firebase.firestore().collection(target).get().then((snapshot) => {
            const allContent = snapshot.docs.map((contentObj) => ({
                ...contentObj.data(),
                docId: contentObj.id
            }));

            setContent(allContent);
        }).catch((error) => {
            console.warn("Firebase response:", error.message);
        });
    }, []);

    return { [target]: content }
}

export default useContent;