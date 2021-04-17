import { isNumeric } from "./form-lib.js";

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
    if (typeof length !== "number") {
        if (!isNumeric(length))
            throw new Error("INVALID_ARGUMENT_TYPE");

        length = Number(length);
    }

    /** These are the options that we have to generate a strong and robust password from. */
    var options = "abcdefghijklmnopqrstuvwxyz&&ABCDEFGHIJKLMNOPQRSTUVWXYZ&&0123456789&&!$^&*-=+_?".split("&&");
    /** Setting the password to empty as a initial value. */
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

    /** Placeholder for our password characters and symbols. */
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

        /** Array that will hold the missing values that makes a password strong to use. */
        let missingValueArray = [];
        /** Setting the flag containsAll to true initially. */
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