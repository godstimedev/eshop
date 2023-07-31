import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import cartReducer from '../features/cartSlice';
import authReducer from '../features/authSlice';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		auth: authReducer,
	},
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

// typeof store.dispatch refers to the type of the dispatch function from your Redux store. It represents the dispatch function's signature, which is a function that takes an action object and sends it to the Redux store to trigger state updates.

// () => typeof store.dispatch:
// This specifies the return type of the custom useAppDispatch hook. It's a function that takes no arguments and returns the type of the dispatch function, which is the type representing the dispatching of actions to the Redux store.

//typeof store.getState:
// store.getState is a function that returns the current state of the Redux store. The typeof operator is used to obtain the type of this function, which represents the type of the entire state held in the Redux store.

// ReturnType<typeof store.getState>:
// ReturnType is a TypeScript utility type that extracts the return type of a function. In this case, ReturnType<typeof store.getState> gives you the type of the entire state of your Redux store.

// TypedUseSelectorHook:
// TypedUseSelectorHook is a type provided by react-redux. It is a generic type that helps to ensure that the useSelector hook is used correctly with respect to the type of the Redux state.

// useSelector:
// useSelector is the standard hook provided by react-redux, which allows you to access the state from the Redux store within your React components.
