export function getUid() {
    /**
     * @function getUid() generates a universal unique identifier.
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
