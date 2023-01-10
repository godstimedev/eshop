import { createSlice } from '@reduxjs/toolkit';
import { productData } from '../../data/productData';

export interface Product {
	id: string;
	img: string;
	name: string;
	price: number;
	shortDescription: string;
	fullDescription: string;
}

interface ProductState {
	products: Product[];
	amount: number;
	total: number;
	subTotal: number;
	count: number;
}

const initialState: ProductState = {
	products: productData,
	amount: 0,
	total: 0,
	subTotal: 0,
	count: 0,
};

export const CartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		increment: (state) => {
			state.count = state.count + 1;
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
