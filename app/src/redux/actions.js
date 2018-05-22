/*
 * action types
 */

export const SUBMIT_STEP = 'SUBMIT_STEP';


/*
 * action creators
 */

export function submitStep(form) {
    return {
        type: SUBMIT_STEP,
        form: form
    }
};