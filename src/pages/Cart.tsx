import React from 'react';
import { ReactComponent as ArrowBack } from '../assets/svg/ArrowBack.svg';
import ProductImg from '../assets/images/productImg.png';

type Props = {};

function Cart({}: Props) {
	return (
		<main className="relative min-h-[100vh] px-[4rem] py-2">
			<section className="">
				<h1>Shopping Cart</h1>
				<div className="flex gap-2 items-center cursor-pointer">
					<ArrowBack />
					<p>Continue Shopping</p>
				</div>
			</section>

			<section className="flex gap-4 my-[3rem]">
				<div className="bg-[#FAFAFA] w-[70%] ">
					<div className="grid grid-cols-4 auto-cols-min items-center gap-6 py-[1rem] ">
						<span className="">{''}</span>
						<span className=" text-center text-lg font-semibold text-[#151515]">Unit Price</span>
						<span className=" text-center text-lg font-semibold text-[#151515]">QTY</span>
						<span className=" text-center text-lg font-semibold text-[#151515]">Total SAR</span>
					</div>

					<div className="grid  grid-cols-4 items-center gap-6 py-[1.5rem] border border-t border-[#fff]">
						<div className=" flex gap-3 items-center ">
							<img src={ProductImg} alt="/" className="h-[60px] w-[60px]   object-cover" />
							<div>
								<h2>Product Name</h2>
								<p>Lorem Ipsum</p>
							</div>
						</div>
						<div className="text-center">199.00</div>
						<div className="text-center">199.00</div>
						<div className="text-center">199.00</div>
					</div>
				</div>

				<div className="bg-[#FAFAFA] w-[30%]"></div>
			</section>
		</main>
	);
}

export default Cart;
