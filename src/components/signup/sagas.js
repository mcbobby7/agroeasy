import { effects } from 'redux-saga';
import {  SIGNUP_REQUEST } from './actionTypes';
import { SIGNUP_URL } from './constants';
import { signupSuccess, signupFailure } from './actions';

function* signupUser(action) {
    try {
        const { user } = action;
        const response = yield fetch(SIGNUP_URL, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        if(response.ok){
            const data = yield response.json();
            // eslint-disable-next-line no-console
            console.log(data);
            yield effects.put(signupSuccess(data));
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        yield effects.put(signupFailure(error));
    } 
}

/**
 * @function
 * Watches for the {@link actionTypes.SIGNUP_REQUEST SIGNUP_REQUEST} action.
 * Triggers request to capture data from body
 *
 * @return {void}
 */
function* watchSignupUser() {
    try {
        yield effects.takeEvery(SIGNUP_REQUEST, signupUser);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

export default function* () {
    yield effects.all([
        watchSignupUser(),
    ]);
}
