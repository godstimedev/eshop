import { createSlice } from '@reduxjs/toolkit';
import { productData } from '../../data/productData';

export interface Cart {
	id: number;
	amount: number;
	img: string;
	name: string;
	price: number;
}

interface CartState {
	cartItems: Cart[];
	quantity: number;
	total: number;
	subTotal: number;
	count: number;
	addToCart: boolean;
	itemTotal: number;
}

const initialState: CartState = {
	cartItems: [],
	quantity: 1,
	total: 0,
	subTotal: 0,
	count: 1,
	addToCart: true,
	itemTotal: 0,
};

// interface CartReducers {
// 	addItems: (state: any, payload: any) => any;
// 	removeItem: (state: any, payload: any) => any;
// }

// const reducers: CartReducers = {
// 	addItems: (state, { payload }) => {
// 		return [...state.cartItems, payload];
// 	},

// 	removeItem: (state, { payload }) => {
// 		state.cartItems.filter((item: any) => {
// 			return item.id !== payload.id;
// 		});
// 	},
// };

// let addCart: () => boolean;

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
			// state.quantity = state.quantity + 1;
		},
		decrement: (state, { payload }) => {
			const cartItem: any = state.cartItems.find((item) => item.id === payload.id);
			if (cartItem.amount > 1) {
				cartItem.amount = cartItem.amount - 1;
				// state.quantity = state.quantity - 1;
			}
		},

		// getItemQuantity: (state, { payload }) => {
		// 	const quantity: any = state.cartItems.find((item) => item.id === payload.id)?.amount || 0;
		// 	return quantity;
		// },
		calculateTotals: (state) => {
			let amount = 0;
			let total = 0;
			// let itemTotal = 0;
			let subTotal = 0;
			state.cartItems.forEach((item) => {
				state.subTotal += item.price * item.amount;
			});
			state.quantity = amount;
			state.total = total;
			// state.itemTotal = itemTotal;
			// state.subTotal += subTotal;
		},
		// addCart: (state) => {
		// 	const cart: any = !state.addToCart;
		// 	return cart;
		// },
	},
});

export default CartSlice.reducer;
export const { addItems, removeItem, increment, decrement, calculateTotals } = CartSlice.actions;
