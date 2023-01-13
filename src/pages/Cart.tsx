import React from 'react';
import { ReactComponent as ArrowBack } from '../assets/svg/ArrowBack.svg';
import { ReactComponent as Delete } from '../assets/svg/Delete.svg';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/store/store';
import { decrement, increment, removeItem } from '../redux/features/cartSlice';

type Props = {};

function Cart({}: Props) {
	const dispatch = useAppDispatch();
	const { cartItems } = useAppSelector((store) => store.cart);

	let shipping: number = 5.91;
	let total = 0;
	let sub = 0;
	const subtotal: any = (item: any) => {
		sub += item.price * item.amount;
		return sub;
	};
	cartItems.forEach(subtotal);
	total += sub + shipping;

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
				{cartItems.length > 0 && (
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

						{cartItems.map((item) => (
							<div
								key={item.id}
								className="grid  grid-cols-4 items-center gap-6 py-[1.5rem]  border-t border-[#fff] "
							>
								<div className="flex flex-col md:flex-row gap-3 items-center ">
									<img src={item.img} alt="/" className="h-[60px] w-[60px]   object-cover" />
									<div>
										<h2>{item.name}</h2>
										<p>Lorem Ipsum</p>
									</div>
								</div>
								<div className="text-center text-sm">{item.price}</div>
								<div className="text-center flex justify-center gap-4">
									<span
										onClick={() => dispatch(decrement(item))}
										className="border border-black w-[25px] h-[25px] cursor-pointer "
									>
										-
									</span>
									<span>{item.amount}</span>
									<span
										onClick={() => dispatch(increment(item))}
										className="border border-black w-[25px] h-[25px] cursor-pointer"
									>
										+
									</span>
								</div>
								<div className="text-center flex items-center justify-center justify-items-stretch">
									<span className="flex-grow text-sm">{item.amount * item.price}</span>{' '}
									<Delete
										onClick={() => dispatch(removeItem(item))}
										className="justify-self-end cursor-pointer"
									/>
								</div>
							</div>
						))}
					</div>
				)}

				{/* right section  */}
				{cartItems.length > 0 && (
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
								<p className="text-[#151515] text-lg">{sub}</p>
								<p className="font-light text-sm text-[#A7A7A7] mt-[-.3rem] ml-auto">5,91 SAR</p>
							</div>
						</div>

						<div className="flex flex-col gap-4 pt-4 border-t border-[rgba(222, 222, 222, 0.1)]">
							<div className="flex justify-between">
								<p className="text-[#151515] text-lg">
									Total <span className="font-light text-sm text-[#A7A7A7]">(VAT included.)</span>
								</p>
								<p className="text-[#151515] text-lg">{total} SAR</p>
							</div>
							<button className="bg-black text-white capitalize">Safe to checkout</button>
						</div>
					</div>
				)}

				{/* empty cart  */}
				{cartItems.length === 0 && (
					<div className="flex items-center justify-center w-full">
						<h1 className="text-xl font-bold">Your Cart is empty</h1>
					</div>
				)}
			</section>
		</main>
	);
}

export default Cart;
