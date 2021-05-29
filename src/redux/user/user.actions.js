import { UserActionTypes } from './user.actions.js';

export const setCurrentUser = user => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user
})