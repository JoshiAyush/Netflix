import data from "./data/data.json";
import { getUid } from "./utils/uuid";

export function seedDatabase(firebase) {
  /**
   * @function seedDatabase() adds data entries to the firebase. We store all of our data in the firestore as it provides lots of
   * features as a database we later pull this data to put in our browse page.
   *
   * @argument firebase is the firebase object for firebase authentication.
   */

  for (let target in data) {
    data[target].forEach((element) => {
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
      firebase
        .firestore()
        .collection(target)
        .add({
          ...element,
          id: getUid()
        });
    });
  }
}
