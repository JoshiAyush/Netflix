import validator from "validator";

import { is } from "./type.js";

export function sleepSync(milliseconds) {
  /**
   * @function sleepSync() is used to set a synchronous timout for the given milliseconds. It blocks the execution of code until
   * the time given in milliseconds pass.
   * @argument {Number} milliseconds specifies for how long it should wait.
   */
  milliseconds = is(milliseconds).a(Number)
    ? milliseconds
    : is(milliseconds).a(String) && validator.isNumeric(milliseconds)
    ? Number(milliseconds)
    : 0;

  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

export function sleep(milliseconds) {
  /**
   * @function sleep() is used to set a asynchronous timeout for the given milliseconds. It blocks the execution of the function
   * it is called in for the given milliseconds.
   * @argument {Number} milliseconds specifies for how long it should wait.
   * @returns {Promise} promise holding a timeout.
   */
  milliseconds = is(milliseconds).a(Number)
    ? milliseconds
    : is(milliseconds).a(String) && validator.isNumeric(milliseconds)
    ? Number(milliseconds)
    : 0;

  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
