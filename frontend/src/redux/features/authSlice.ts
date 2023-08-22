import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	token: undefined,
	// refresh: undefined,
};

const authSlice = createSlice({
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

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
