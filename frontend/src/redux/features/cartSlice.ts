import { createSlice } from '@reduxjs/toolkit';

export interface Cart {
	id: number;
	amount: number;
	img: string;
	name: string;
	price: number;
}

interface CartState {
	cartItems: Cart[];
}

const initialState: CartState = {
	cartItems: [],
};

export const CartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		addItems: (state, { payload }) => {
			state.cartItems = [...state.cartItems, payload];
		},

		removeItem: (state, { payload }) => {
			state.cartItems = state.cartItems.filter((item) => {
				return item.id !== payload.id;
			});
		},

		increment: (state, { payload }) => {
			const cartItem: any = state.cartItems.find((item) => item.id === payload.id);
			cartItem.amount = cartItem?.amount + 1;
		},
		decrement: (state, { payload }) => {
			const cartItem: any = state.cartItems.find((item) => item.id === payload.id);
			if (cartItem.amount > 1) {
				cartItem.amount = cartItem.amount - 1;
			}
		},
	},
});

export default CartSlice.reducer;
export const { addItems, removeItem, increment, decrement } = CartSlice.actions;
