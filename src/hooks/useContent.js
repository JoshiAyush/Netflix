import { useState } from "react";
import { useEffect } from "react";

import { useFirebaseContext } from "../context/StateProvider.js";

function useContent(target) {
    /**
     * @function UseContent() returns a object with the target (series/films) content.
     * 
     * @argument {String} target is the collection that we need to use.
     * 
     * This function {hook} sends an asynchronous request to the firebase backend to pull the target data from that, after pulling
     * the data successfully we return the data wrapped in an object or if we failed pulling the data from the backend then either 
     * firebase built-in functionality inform the user about the problem or the promise just return a exception that we catch and 
     * use it to inform the user about the problem.
     * 
     * @returns {Object} containing target content in it eg. series or films. 
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
            console.log(`Firebase response: ${error.message}`, "color: yellow; font-weight: bold; font-size: medium;");
        });
    }, []);

    return { [target]: content }
}

export default useContent;