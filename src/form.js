/**
 * @file src/validate.js helps us to validate the user's email, first name, last name and mobile number during the time of Signing 
 * up as well as Signing in both the times this validating functionality is useful. 
 */

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
     * This function checks if the given field is empty or not because no field in the form is allowed to be a empty field, user 
     * needs to enter some value in the form if the field is found to be an empty field then this function informs the user that 
     * this is not allowed and returns true, otherwise it returns false.
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
     * This function applies a regex (regular expression) pattern to the given string in order to find out if this string only 
     * contains letters or not if not then it informs the user that this is not allowed otherwise it returns true.
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
     * This function applies a regex (regular expression) pattern to the given string in order to find out if this string only 
     * contains numbers or not if not then it informs the user that this is not allowed otherwise it returns true.
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
     * This function applies the regex (regular expression) pattern given to it to the field given and finds if the field matches 
     * with the regex (regular expression) pattern if found true then it returns true otherwise it returns false. This function is 
     * useful in validating email address or custom email address.
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
     * This function checks if the email is a valid email or custom email address or not if found true then this function returns 
     * true if not it returns false.
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
     * This function first checks if the given string contains characters or not if not it returns false value and inform the user 
     * that this is not allowed if the string is not empty then it again checks the string if that string contains only letters 
     * because no digits or symbols are allowed for First Name if the function found any kind of digit or symbol in the first name 
     * if returns false and also informs the user that this is not allowed.  
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
     * This function first checks if the given string contains characters or not if not it returns false value and inform the user 
     * that this is not allowed if the string is not empty then it again checks the string if that string contains only letters 
     * because no digits or symbols are allowed for Last Name if the function found any kind of digit or symbol in the last name if 
     * returns false and also informs the user that this is not allowed.  
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
     * This function simply checks if the given value has only digits in it if true then it checks the number of digits this mobile 
     * number has if it founds the number to be equal to 10 then it just returns true otherwise false.
     * 
     * @return {Bool} true if the given mobile number is a valid mobile number. 
     */
    if (checkIfOnlyNumbers(mobile) && mobile.length === 10) {
        return true;
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
     * @argument {String} lname last name of the user.
     * @argument {String} mobile mobile number of the user.
     * @argument {String} email email address of the user.
     * 
     * This function checks if all the field are valid or not if it founds the field to be valid then this function returns true if 
     * not then this function returns false.
     */
    if (validateFirstName(fname) && validateLastName(lname) && validateMobile(mobile) && validateEmail(email)) {
        return true;
    } else {
        return false;
    }
}

export function createPassword(length = 10) {
    /**
     * @function createPassword() creates a strong password with the given length.
     * 
     * @argument {Integer} length is the given length of the password (default 8).
     * 
     * This function generates a strong password for user to register as a netflix user this function ensures that the user get a 
     * strong unbreakable password, it checks if all the characters and symbols are present in the password if yes then it returns 
     * the generated password otherwise it replaces some characters with required characters in the password and then returns it.
     * 
     * @return {String} password
     */

    /** These are the options that we have to generate a strong and robust password */
    var options = "abcdefghijklmnopqrstuvwxyz&&ABCDEFGHIJKLMNOPQRSTUVWXYZ&&0123456789&&!$^&*-=+_?".split("&&");
    /** Setting the password to empty as a initial value */
    var password = "";
    /** Creating an array of password length, this helps in replacing characters with required one later. */
    var passwordArray = Array(length);

    const getCurrentOption = (option) => {
        /**
         * @function getCurrentOption() returns an option we can chose characters from.
         * 
         * @argument {Array} option is the array from which we can chose an option (index value).
         * 
         * @return {Character/String} an array index value.
         */
        return option[Math.floor(Math.random() * option.length)];
    };

    const getRandomChar = (currentoption) => {
        /**
         * @function getRandomChar() returns a random character from the option given to it.
         * 
         * @argument {String} currentoption is the option using its element we need to generate a random character.
         * 
         * @return {Character} random character generated from the given option.
         */
        return currentoption[Math.floor(Math.random() * currentoption.length)];
    };

    /* Placeholder for our password characters and symbols. */
    let randomChar = "";

    for (let i = 0; i < length; i++) {
        /**
         * This is where we generate a password for user using the options available, we also push the elements generated to the 
         * passwordArray so that in future in case we need to replace the generated password's element with absent characters then 
         * this will help us. 
         */
        randomChar = getRandomChar(getCurrentOption(options));
        password += randomChar;
        passwordArray.push(randomChar);
    }

    const checkPassword = () => {
        /**
         * @function checkPassword() checks the password for all the characters and symbols needed to make a password strong.
         * 
         * This function ensures that the password contains right characters and symbols so that the user will get a strong 
         * password, if it found that the password generated does not meet the requirement of a strong password then instead of 
         * generating the password again it just replaces some characters and symbols from the generated password so to make the 
         * password more strong to use. 
         */

        /* Array that will hold the missing values that makes a password strong to use. */
        let missingValueArray = [];
        /* Setting the flag containsAll to true initially. */
        let containsAll = true;

        options.forEach((element, index, array) => {
            /**
             * This is where we check if the password generated has all the characters and symbols from the options available if 
             * not then the hasValue flag will remain false and using that we can later regenerate the password for user.  
             */
            let hasValue = false;

            passwordArray.forEach((_element, _index, _array) => {
                /* If any element found to be a element from options then set the flag hasValue to true. */
                if (element.indexOf(_element) > -1) {
                    hasValue = true;
                }
            });

            if (!hasValue) {
                /**
                 * If the flag hasValue is false then set the missingValueArray to the array that the element belongs to. 
                 */
                containsAll = false;
                missingValueArray = element;
            }
        });

        if (!containsAll) {
            /**
             * This is where we replaces the characters of the password generated with required characters and symbols to make the 
             * password strong, we replaces the elements with the missing values and then we set the password to new password 
             * generated and then we again ensures that this time the password is strong if true then return it otherwise repeat 
             * the process.  
             */
            passwordArray[Math.floor(Math.random() * passwordArray.length)] = getRandomChar(missingValueArray);

            password = "";
            passwordArray.forEach((element, index, array) => {
                password += element;
            });

            checkPassword();
        }
    }

    checkPassword();

    return password;
}