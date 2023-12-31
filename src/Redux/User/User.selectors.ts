import {RootState} from '../store';

export const getToken = (state: RootState) => state.user.token;
export const getName = (state: RootState) => state.user.fullName;
export const getId = (state: RootState) => state.user._id;
