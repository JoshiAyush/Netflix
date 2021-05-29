function isEmpty(value) {
  /**
   * @function isEmpty() checks if the field given is empty or not.
   *
   * @argument {String} value user's entered field.
   *
   * This function checks if the field given is a emtpy field or not if it founds the field to be an empty field it returns true
   * otherwise it returns false.
   *
   * @return {Bool} false if the field given to it is a non-empty field.
   */
  if (typeof value !== "string") throw new Error("INVALID_ARGUMENT_TYPE");

  if (value === "") {
    /** Inform the user that this is not allowed. */
    return true;
  }

  return false;
}

function checkIfEmpty(field) {
  /**
   * @function checkIfEmpty() checks if the field given to it is empty or not.
   *
   * @argument {String} field user's entered field.
   *
   * This function checks if the given field is empty or not because no field in the form is allowed to be a empty field, user
   * needs to enter some value in the form if the field is found to be an empty field then this function informs the user that
   * this is not allowed and returns true, otherwise it returns false.
   *
   * @return {Bool} false if found the field to be a non-empty field otherwise true.
   */
  if (typeof field !== "string") throw new Error("INVALID_ARGUMENT_TYPE");

  try {
    if (isEmpty(field.trim())) {
      /** Inform user that this is not allowed */
      return true;
    }
  } catch (err) {
    if (err.message === "INVALID_ARGUMENT_TYPE") {
      window.alert("There is a invalid value in the fields! Can't proceed!");
    }
    return false;
  }

  return false;
}

function checkIfOnlyLetters(field) {
  /**
   * @function checkIfOnlyLetters() checks if the field contains only alphabets.
   *
   * @argument {String} field user's entered field.
   *
   * This function applies a regex (regular expression) pattern to the given string in order to find out if this string only
   * contains letters or not if not then it informs the user that this is not allowed otherwise it returns true.
   *
   * @return {Bool} true if found the string to be a valid field.
   */
  if (typeof field !== "string") throw new Error("INVALID_ARGUMENT_TYPE");

  if (!/^[a-zA-Z ]+$/.test(field)) {
    /** Inform user that this is not allowed */
    return false;
  }

  return true;
}

function checkIfOnlyNumbers(mobile) {
  /**
   * @function checkIfOnlyNumbers() checks if the field contains only numbers.
   *
   * @argument {String} field user's entered field.
   *
   * This function applies a regex (regular expression) pattern to the given string in order to find out if this string only
   * contains numbers or not if not then it informs the user that this is not allowed otherwise it returns true.
   *
   * @return {Bool} true if found the string to be a valid field.
   */
  if (typeof mobile !== "string") throw new Error("INVALID_ARGUMENT_TYPE");

  if (!/^\d+$/.test(mobile)) {
    /* Inform the user that this is not allowed. */
    return false;
  }

  return true;
}

function matchWithRegEx(regEx, field) {
  /**
   * @function matchWithRegEx() matches the field value with a regex (regular expression) pattern.
   *
   * @argument {Regex} regEx regex pattern to match the field with.
   *
   * @argument {String} field is the user's entered field.
   *
   * This function applies the regex (regular expression) pattern given to it to the field given and finds if the field matches
   * with the regex (regular expression) pattern if found true then it returns true otherwise it returns false. This function is
   * useful in validating email address or custom email address.
   *
   * @return true if the field matches with the regex (regular expression) pattern.
   */
  if (typeof field !== "string") throw new Error("INVALID_ARGUMENT_TYPE");

  if (typeof regEx !== "object" || regEx === null)
    throw new Error("INVALID_ARGUMENT_TYPE");

  if (field.match(regEx)) {
    return true;
  }

  return false;
}

function containsCharacters(email) {
  /**
   * @function containsCharacters() function checks if the email is a valid email address.
   *
   * @argument {String} email user's email.
   *
   * This function checks if the email is a valid email or custom email address or not if found true then this function returns
   * true if not it returns false.
   *
   * @return true if the email is a valid email or custom email address.
   */
  if (typeof email !== "string") throw new Error("INVALID_ARGUMENT_TYPE");

  try {
    if (
      matchWithRegEx(
        new RegExp(
          `^(([^<>()\[\]\\.,;:\s@"]+` +
            `(\.[^<>()\[\]\\.,;:\s@"` +
            `]+)*)|(".+"))@((\[[0-9]` +
            `{1,3}\.[0-9]{1,3}\.[0-9` +
            `]{1,3}\.[0-9]{1,3}\])|(` +
            `([a-zA-Z\-0-9]+\.)+[a-z` +
            `A-Z]{2,}))$`
        ),
        email
      )
    ) {
      return true;
    }
  } catch (err) {
    if (err.message === "INVALID_ARGUMENT_TYPE") {
      window.alert("There is a invalid value in the fields! Can't proceed!");
    }
    return false;
  }

  return false;
}

export function validateFirstName(firstName) {
  /**
   * @function validateFirstName() validates the user's entered first name.
   *
   * @argument {String} firstName user's entered first name.
   *
   * This function first checks if the given string contains characters or not if not it returns false value and inform the user
   * that this is not allowed if the string is not empty then it again checks the string if that string contains only letters
   * because no digits or symbols are allowed for First Name if the function found any kind of digit or symbol in the first name
   * if returns false and also informs the user that this is not allowed.
   *
   * @return {Bool} true if found a validate first name.
   */
  if (typeof firstName !== "string") throw new Error("INVALID_ARGUMENT_TYPE");

  try {
    if (checkIfEmpty(firstName)) {
      /** Inform user that this is not allowed */
      return false;
    }
  } catch (err) {
    if (err.message === "INVALID_ARGUMENT_TYPE") {
      window.alert("There is a invalid value in the fields! Can't proceed!");
    }
    return false;
  }

  try {
    if (!checkIfOnlyLetters(firstName)) {
      /** Inform user that this is not allowed */
      return false;
    }
  } catch (err) {
    if (err.message === "INVALID_ARGUMENT_TYPE") {
      window.alert("There is a invalid value in the fields! Can't proceed!");
    }
    return false;
  }

  return true;
}

export function validateLastName(lastName) {
  /**
   * @function validateLastName() validates the user's entered last name.
   *
   * @argument {String} LastName user's entered last name.
   *
   * This function first checks if the given string contains characters or not if not it returns false value and inform the user
   * that this is not allowed if the string is not empty then it again checks the string if that string contains only letters
   * because no digits or symbols are allowed for Last Name if the function found any kind of digit or symbol in the last name if
   * returns false and also informs the user that this is not allowed.
   *
   * @return {Bool} true if found a validate last name.
   */
  if (typeof lastName !== "string") throw new Error("INVALID_ARGUMENT_TYPE");

  try {
    if (checkIfEmpty(lastName)) {
      /** Inform user that this is not allowed */
      return false;
    }
  } catch (err) {
    if (err.message === "INVALID_ARGUMENT_TYPE") {
      window.alert("There is a invalid value in the fields! Can't proceed!");
    }
    return false;
  }

  try {
    if (!checkIfOnlyLetters(lastName)) {
      /** Inform user that this is not allowed */
      return false;
    }
  } catch (err) {
    if (err.message === "INVALID_ARGUMENT_TYPE") {
      window.alert("There is a invalid value in the fields! Can't proceed!");
    }
    return false;
  }

  return true;
}

export function validateMobile(mobile) {
  /**
   * @function validateMobile() validates the mobile number given by the user.
   *
   * @argument {String} mobile user's entered mobile number.
   *
   * This function simply checks if the given value has only digits in it if true then it checks the number of digits this mobile
   * number has if it founds the number to be equal to 10 then it just returns true otherwise false.
   *
   * @return {Bool} true if the given mobile number is a valid mobile number.
   */
  if (typeof mobile !== "string") throw new Error("INVALID_ARGUMENT_TYPE");

  try {
    if (checkIfOnlyNumbers(mobile) && mobile.length === 10) {
      return true;
    }
  } catch (err) {
    if (err.message === "INVALID_ARGUMENT_TYPE") {
      window.alert("There is a invalid value in the fields! Can't proceed!");
    }
    return false;
  }

  return false;
}

export function validateEmail(email) {
  /**
   * @function validateEmail() validates the user's entered email address.
   *
   * @argument {String} email user's entered email address.
   *
   * This function first checks if the given string contains characters or not if not it returns false value and inform the user
   * that this is not allowed if the string is not empty then it again checks the string if that string contains valid email
   * address characters if found false returns false otherwise it returns true.
   *
   * @return {Bool} true if found a valid email address.
   */
  if (typeof email !== "string") throw new Error("INVALID_ARGUMENT_TYPE");

  try {
    if (checkIfEmpty(email)) {
      /** Inform the user that this is not allowed. */
      return false;
    }
  } catch (err) {
    if (err.message === "INVALID_ARGUMENT_TYPE") {
      window.alert("There is a invalid value in the fields! Can't proceed!");
    }
    return false;
  }

  try {
    if (!containsCharacters(email, 5)) {
      /** Inform the user that this is not allowed. */
      return false;
    }
  } catch (err) {
    if (err.message === "INVALID_ARGUMENT_TYPE") {
      window.alert("There is a invalid value in the fields! Can't proceed!");
    }
    return false;
  }

  return true;
}

export function isNumeric(str) {
  if (typeof str !== "string") return false;

  return !isNaN(str) && !isNaN(parseFloat(str));
}
