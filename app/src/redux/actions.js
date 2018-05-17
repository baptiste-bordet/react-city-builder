/*
 * action types
 */

export const CHANGE_FORM_STEP = 'CHANGE_FORM_STEP';


/*
 * action creators
 */

export function changeFormStep(step) {
    return {
        type: CHANGE_FORM_STEP,
        step: step
    }
};