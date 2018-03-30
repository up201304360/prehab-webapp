import store from '../store/store';
import { loggedIn, loggedOut } from '../actions/actions';
import { SESSION_COOKIE_NAME } from '../constants/configuration';
import { setCookie, deleteCookie, getCookie } from './cookie-handler';
import * as actionTypes from '../actionTypes/actionTypes';

/**
 * Authenticates an user.
 * @param {*} userID User id.
 * @param {*} provider Provider the user used to login.
 */
export function authenticate(userID) {
    let response = {
        accessToken: "AmazingToken",
        type: actionTypes.LOGGED_IN
    }

    setCookie(SESSION_COOKIE_NAME, response.accessToken);
    store.dispatch(loggedIn());
}

/**
 * Logs out the user.
 */
export function logout() {
  store.dispatch(loggedOut());
  deleteCookie(SESSION_COOKIE_NAME)
}

/**
 * Updates the auth info.
 */
export function updateAuthInfo() {
  let sessionCookie = getCookie(SESSION_COOKIE_NAME);

  if (sessionCookie !== null) {
    let response = {
        accessToken: "AmazingToken",
        type: actionTypes.LOGGED_IN
    }
    store.dispatch(loggedIn(response));    
  }
}