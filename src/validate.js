/**
 * @file src/validate.js helps us to validate the user's email, first name, last name
 * and mobile number during the time of Signing up as well as Signing in both the times
 * this validating functionality is useful. 
 */

function isEmpty(value) {
    /**
     * @function isEmpty() checks if the field given is empty or not.
     * 
     * @argument {String} value user's entered field.
     * 
     * This function checks if the field given is a emtpy field or not if it founds the
     * field to be an empty field it returns true otherwise it returns false.
     * 
     * @return {Bool} false if the field given to it is a non-empty field. 
     */
    if (value === "") {
        /* Inform the user that this is not allowed. */
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
     * This function checks if the given field is empty or not because no field in the
     * form is allowed to be a empty field, user needs to enter some value in the form
     * if the field is found to be an empty field then this function informs the user 
     * that this is not allowed and returns true, otherwise it returns false.
     * 
     * @return {Bool} false if found the field to be a non-empty field otherwise true.
     */
    if (isEmpty(field.trim())) {
        /* Inform user that this is not allowed */
        return true;
    }

    return false;
}

function checkIfOnlyLetters(field) {
    /**
     * @function checkIfOnlyLetters() checks if the field contains only alphabets.
     * 
     * @argument {String} field user's entered field.
     * 
     * This function applies a regex (regular expression) pattern to the given string in
     * order to find out if this string only contains letters or not if not then it informs
     * the user that this is not allowed otherwise it returns true.
     * 
     * @return {Bool} true if found the string to be a valid field.  
     */
    if (!(/^[a-zA-Z ]+$/.test(field))) {
        /* Inform user that this is not allowed */
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
     * This function applies a regex (regular expression) pattern to the given string in
     * order to find out if this string only contains numbers or not if not then it informs
     * the user that this is not allowed otherwise it returns true.
     * 
     * @return {Bool} true if found the string to be a valid field.  
     */
    if (!(/^\d+$/.test(mobile))) {
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
     * This function applies the regex (regular expression) pattern given to it to the field given and
     * finds if the field matches with the regex (regular expression) pattern if found true then it returns
     * true otherwise it returns false. This function is useful in validating email address or custom email
     * address.
     * 
     * @return true if the field matches with the regex (regular expression) pattern.
     */
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
     * This function checks if the email is a valid email or custom email address or not if found
     * true then this function returns true if not it returns false.
     * 
     * @return true if the email is a valid email or custom email address. 
     */
    if (matchWithRegEx(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, email)) {
        return true;
    }

    return false;
}

function validateFirstName(firstName) {
    /**
     * @function validateFirstName() validates the user's entered first name.
     * 
     * @argument {String} firstName user's entered first name.
     * 
     * This function first checks if the given string contains characters or not if
     * not it returns false value and inform the user that this is not allowed if the 
     * string is not empty then it again checks the string if that string contains only 
     * letters because no digits or symbols are allowed for First Name if the function
     * found any kind of digit or symbol in the first name if returns false and also 
     * informs the user that this is not allowed.  
     * 
     * @return {Bool} true if found a validate first name.
     */
    if (checkIfEmpty(firstName)) {
        /* Inform user that this is not allowed */
        return false;
    }

    if (!checkIfOnlyLetters(firstName)) {
        /* Inform user that this is not allowed */
        return false;
    }

    return true;
}

function validateLastName(lastName) {
    /**
     * @function validateLastName() validates the user's entered last name.
     * 
     * @argument {String} LastName user's entered last name.
     * 
     * This function first checks if the given string contains characters or not if
     * not it returns false value and inform the user that this is not allowed if the 
     * string is not empty then it again checks the string if that string contains only 
     * letters because no digits or symbols are allowed for Last Name if the function
     * found any kind of digit or symbol in the last name if returns false and also 
     * informs the user that this is not allowed.  
     * 
     * @return {Bool} true if found a validate last name.
     */
    if (checkIfEmpty(lastName)) {
        /* Inform the user that this is not allowed. */
        return false;
    }

    if (!checkIfOnlyLetters(lastName)) {
        /* Inform the user that this is not allowed. */
        return false;
    }

    return true;
}

function validateMobile(mobile) {
    /**
     * @function validateMobile() validates the mobile number given by the user.
     * 
     * @argument {String} mobile user's entered mobile number.
     * 
     * This function simply checks if the given value has only digits in it if true then
     * it checks the number of digits this mobile number has if it founds the number to be
     * equal to 10 then it just returns true otherwise false.
     * 
     * @return {Bool} true if the given mobile number is a valid mobile number. 
     */
    if (checkIfOnlyNumbers(mobile) && mobile.length === 10) {
        return true;
    }

    return false;
}

function validateEmail(email) {
    /**
     * @function validateEmail() validates the user's entered email address.
     * 
     * @argument {String} email user's entered email address.
     * 
     * This function first checks if the given string contains characters or not if
     * not it returns false value and inform the user that this is not allowed if the 
     * string is not empty then it again checks the string if that string contains valid
     * email address characters if found false returns false otherwise it returns true.  
     * 
     * @return {Bool} true if found a valid email address.
     */
    if (checkIfEmpty(email)) {
        /* Inform the user that this is not allowed. */
        return false;
    }

    if (!containsCharacters(email, 5)) {
        /* Inform the user that this is not allowed. */
        return false;
    }

    return true;
}

export function validateForm(fname, lname, mobile, email) {
    /**
     * @function validateForm() validates the form that the user just filled.
     * 
     * @argument {String} fname first name of the user.
     * 
     * @argument {String} lname last name of the user.
     * 
     * @argument {String} mobile mobile number of the user.
     * 
     * @argument {String} email email address of the user.
     * 
     * This function checks if all the field are valid or not if it founds the field to be
     * valid then this function returns true if not then this function returns false.
     */
    if (validateFirstName(fname) && validateLastName(lname) && validateMobile(mobile) && validateEmail(email)) {
        return true;
    } else {
        return false;
    }
}