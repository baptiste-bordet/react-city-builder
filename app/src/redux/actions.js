/*
 * action types
 */

export const SUBMIT_STEP = 'SUBMIT_STEP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


/*
 * action creators
 */

export function submitStep(form) {
    return {
        type: SUBMIT_STEP,
        form: form
    }
};

export function login(user) {
    return {
        type: LOGIN,
        user: user
    }
};

export function logout() {
    return {
        type: LOGOUT
    }
};