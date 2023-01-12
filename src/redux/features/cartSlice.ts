import { createSlice } from '@reduxjs/toolkit';
import { productData } from '../../data/productData';

export interface Cart {
	id: number;
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
	addToCart: boolean;
}

const initialState: CartState = {
	cartItems: productData,
	amount: 0,
	total: 0,
	subTotal: 0,
	count: 1,
	addToCart: false,
};
// type cartReducers= {
// 	increment : (id: string) =>void
// 	decrement : (id: string) =>void
// 	getItemQuantity : (id: string) => n
// 	addCart : () => boolean
// }

// let addCart: () => boolean;

export const CartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
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
		// getItemQuantity: (state, { payload }) => {
		// 	const quantity: any = state.cartItems.find((item) => item.id === payload.id)?.amount || 0;
		// 	return quantity;
		// },
		addCart: (state) => {
			const cart: any = !state.addToCart;
			return cart;
		},
	},
});

export default CartSlice.reducer;
export const { increment, decrement, addCart } = CartSlice.actions;
