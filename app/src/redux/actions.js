/*
 * action types
 */

export const SET_LANGUAGE = 'SET_LANGUAGE';

/*
 * action creators
 */

export function setLanguage(language) {
    return {
        type: SET_LANGUAGE,
        language: language
    }
};