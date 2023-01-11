import { createSlice } from '@reduxjs/toolkit';
import { productData } from '../../data/productData';

export interface Cart {
	id: string;
	img: string;
	name: string;
	price: number;
	shortDescription: string;
	fullDescription: string;
	amount: number;
}

interface CartState {
	cartItems: Cart[];
	amount: number;
	total: number;
	subTotal: number;
	count: number;
}

const initialState: CartState = {
	cartItems: productData,
	amount: 0,
	total: 0,
	subTotal: 0,
	count: 0,
};

export const CartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		increment: (state, { payload }) => {
			const cartItem: any = state.cartItems.find((item) => item.id === payload.id);
			cartItem.amount = cartItem.amount + 1;
		},
		decrement: (state) => {
			if (state.count > 0) {
				state.count = state.count - 1;
			}
		},
	},
});

export default CartSlice.reducer;
export const { increment, decrement } = CartSlice.actions;
