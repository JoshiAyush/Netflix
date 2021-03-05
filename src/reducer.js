import { ERROR } from "./constants.js";
import { USE_PASSWORD } from "./constants.js";
import { SET_CATEGORY } from "./constants.js";
import { SET_USER_NAME } from "./constants.js";
import { SET_USER_EMAIL } from "./constants.js";
import { SET_SEARCH_TERM } from "./constants.js";
import { SUGGEST_PASSWORD } from "./constants.js";
import { SET_USER_PASSWORD } from "./constants.js";
import { PASSWORD_SUGGESTED } from "./constants.js";

export const SignUpState = {
    error: "",
    userName: "",
    userEmail: "",
    usePassword: "",
    userPassword: "",
    suggestPassword: false,
    passwordSuggested: false
};

export const BrowseState = {
    searchTerm: "",
    category: "series"
};

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_USER_NAME:
            return {
                ...state,
                userName: action.userName
            };
        case SET_USER_EMAIL:
            return {
                ...state,
                userEmail: action.userEmail
            };
        case SET_USER_PASSWORD:
            return {
                ...state,
                userPassword: action.userPassword
            };
        case SUGGEST_PASSWORD:
            return {
                ...state,
                suggestPassword: action.suggestPassword
            }
        case USE_PASSWORD:
            return {
                ...state,
                usePassword: action.usePassword
            };
        case ERROR:
            return {
                ...state,
                error: action.error
            };
        case PASSWORD_SUGGESTED:
            return {
                ...state,
                passwordSuggested: action.passwordSuggested
            };
        case SET_CATEGORY:
            return {
                ...state,
                category: action.category
            };
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.searchTerm
            };
        default:
            throw new Error(`CASE_MISMATCH: ${action.type} is not a valid case!`);
    }
}