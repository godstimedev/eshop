import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	token: undefined,
	// refresh: undefined,
};

const authSlise = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action) => {
			state.token = action.payload.access;
			// state.refresh = action.payload.refresh;
		},
		clearAuth: (state) => {
			state.token = undefined;
			// state.refresh = undefined;
		},
	},
});

export const { setAuth, clearAuth } = authSlise.actions;
export default authSlise.reducer;
