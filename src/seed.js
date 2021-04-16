import data from "./data/data.json";

export function seedDatabase(firebase) {
    /**
     * @function seedDatabase() adds data entries to the firebase. We store all of our data in the firestore as it provides lots of
     * features as a database we later pull this data to put in our browse page.
     * 
     * @argument firebase is the firebase object for firebase authentication. 
     */

    function getUUID() {
        /**
         * @function getUUID() generates a universal unique identifier.
         * 
         * A universally unique identifier (UUID) is a 128-bit number used to identify information in computer systems. The term 
         * globally unique identifier (GUID) is also used, typically in software created by Microsoft. When generated according to
         * the standard methods, UUIDs are, for practical purposes, unique. 
         */

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            /**
             * @function replace() is used to replace a part of the given string with some another string or a regular expression.
             * The original string will remain unchanged.
             * 
             * @syntax string.replace(regex, string);
             * @parameter regex is a regular expression.
             * @parameter string is the string which will replace the content of the given string. 
             * 
             * @return a new string with replaced value.
             */

            const piece = (Math.random() * 16) | 0;
            const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;

            return elem.toString(16);
        });
    }

    for (let target in data) {
        for (let element of data[target]) {
            /**
             * @instance firebase is our admin object that provides access to the firestore
             * 
             * @function firestore() is the database itself it is a new feature of firebase it provides following features,
             * 
             * -> Stores data in documents organized in collections.
             * -> Simple data is easy to store in documents, which are very similar to JSON.
             * -> Complex, hierarchical data is easier to organize at scale, using subcollections within documents.
             * -> Requires less denormalization and data flattening. 
             * 
             * @function collection() is the collection in our database in our case it is `series`
             * 
             * @function add() adds the given data to the target collection in our database
             */
            firebase.firestore().collection(target).add({
                ...element,
                id: getUUID()
            });
        }
    }
}