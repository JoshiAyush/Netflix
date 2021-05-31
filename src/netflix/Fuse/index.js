import Fuse from "fuse.js";

export function getSearchedResults(docs, { keys = [] }, pattern) {
  /**
   * @function getSearchedResults() returns the results after doing some fuzzy searching on the documents given for the given
   * pattern.
   * @argument {Any} docs document to search in.
   * @argument {Array} Object.keys keys to include while searching if the document is an object.
   * @argument {String} pattern pattern to search for in the document.
   * @returns {Array} results if found any.
   */
  return new Fuse(docs, { keys: keys }).search(pattern).map(({ item }) => item);
}
