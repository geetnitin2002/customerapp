export let SHOW_ERROR_TOAST = "SHOW_ERROR_TOAST";
export let RESET_TOAST = "RESET_TOAST";

export let LOGIN = 'LOGIN';
export let SIGNUP = 'SIGNUP';
export let UPDATE = 'UPDATE';
export let USER_DATA = 'USER_DATA';
export let CHANGE_PASSWORD = 'CHANGE_PASSWORD'

export let RESET_ACTIONS = 'RESET_ACTIONS';
export let BOOK_APPOINTMENT = 'BOOK_APPOINTMENT';
export let CATEGORY_ALL = "CATEGORY_ALL";
export let GET_ALL_SLOTS = "GET_ALL_SLOTS";
export let ADD_VEHICLE = "ADD_VEHICLE";


export let GET_ALL_BOOKINGS = "GET_ALL_BOOKINGS";
/**
 * Add all of your actions above these functions.
 *
 * @export
 * @param {*} action
 * @returns
 */
 export function pending(action) {
    return action + "_PENDING";
}

export function fulfilled(action) {
    return action + "_FULFILLED";
}

export function rejected(action) {
    return action + "_REJECTED";
}