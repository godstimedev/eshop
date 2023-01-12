import React from 'react';
import { ReactComponent as ArrowBack } from '../assets/svg/ArrowBack.svg';
import { ReactComponent as Delete } from '../assets/svg/Delete.svg';
import ProductImg from '../assets/images/productImg.png';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/store/store';
import { decrement, increment } from '../redux/features/cartSlice';

type Props = {};

function Cart({}: Props) {
	const dispatch = useAppDispatch();
	const { count, cartItems } = useAppSelector((store) => store.cart);

	const { id } = useParams();
	const product = cartItems.find((item) => item.name === id);

	return (
		<main className="relative min-h-[100vh] md:px-[3rem] px-[1rem] py-2">
			<section className="px-[2rem]">
				<h1>Shopping Cart</h1>
				<Link to="/">
					<div className="flex gap-2 items-center cursor-pointer">
						<ArrowBack />
						<p>Continue Shopping</p>
					</div>
				</Link>
			</section>

			<section className="flex flex-col lg:flex-row gap-4 my-[3rem]">
				{/* left section  */}
				<div className="bg-[#FAFAFA]  lg:w-[70%] pr-4">
					<div className="grid grid-cols-4 auto-cols-min items-center gap-6 py-[1rem] ">
						<span className="">{''}</span>
						<span className=" text-center md:text-lg text-sm font-semibold text-[#151515]">
							Unit Price
						</span>
						<span className=" text-center md:text-lg text-sm font-semibold text-[#151515]">QTY</span>
						<span className=" text-center md:text-lg text-sm font-semibold text-[#151515]">
							Total SAR
						</span>
					</div>

					<div className="grid  grid-cols-4 items-center gap-6 py-[1.5rem]  border-t border-[#fff] ">
						<div className="flex flex-col md:flex-row gap-3 items-center ">
							<img src={ProductImg} alt="/" className="h-[60px] w-[60px]   object-cover" />
							<div>
								<h2>{product?.name}</h2>
								<p>Lorem Ipsum</p>
							</div>
						</div>
						<div className="text-center text-sm">199.00</div>
						<div className="text-center flex justify-center gap-4">
							<span
								onClick={() => dispatch(decrement(product))}
								className="border border-black w-[25px] h-[25px] cursor-pointer "
							>
								-
							</span>
							<span>{count}</span>
							<span
								onClick={() => dispatch(increment(product))}
								className="border border-black w-[25px] h-[25px] cursor-pointer"
							>
								+
							</span>
						</div>
						<div className="text-center flex items-center justify-center justify-items-stretch">
							<span className="flex-grow text-sm">199.00</span>{' '}
							<Delete className="justify-self-end cursor-pointer" />
						</div>
					</div>
				</div>

				{/* right section  */}
				<div className="bg-[#FAFAFA] lg:w-[30%] p-6 flex flex-col gap-6">
					<div className="flex">
						<h3 className="font-bold">
							Do you have a voucher? <span className="font-light text-[#A7A7A7] text-sm">(Optional)</span>
						</h3>
					</div>

					<div className="flex justify-between">
						<button className="border border-black w-[47%] capitalize text-sm">Enter the code</button>
						<button className="bg-black text-white w-[47%] capitalize text-sm">Redeem</button>
					</div>

					<div className="flex justify-between">
						<div>
							<p className="text-[#151515] text-lg">Subtotal</p>
							<p className="font-light text-sm text-[#A7A7A7] mt-[-.3rem]">shipping</p>
						</div>
						<div className="flex flex-col">
							<p className="text-[#151515] text-lg">138,00 SAR</p>
							<p className="font-light text-sm text-[#A7A7A7] mt-[-.3rem] ml-auto">5,91 SAR</p>
						</div>
					</div>

					<div className="flex flex-col gap-4 pt-4 border-t border-[rgba(222, 222, 222, 0.1)]">
						<div className="flex justify-between">
							<p className="text-[#151515] text-lg">
								Total <span className="font-light text-sm text-[#A7A7A7]">(VAT included.)</span>
							</p>
							<p className="text-[#151515] text-lg">143,91 SAR</p>
						</div>
						<button className="bg-black text-white capitalize">Safe to checkout</button>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Cart;
