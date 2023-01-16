import React from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../data/productData';

type Props = {};

function Products({}: Props) {
	return (
		<div className="min-h-[100vh] px-[2rem] md:px-[6rem] my-[2rem]">
			<h1 className="mb-[2rem] text-center">Products</h1>
			<section className="grid grid-cols-1 lg:grid-cols-2 items-center place-items-center gap-[4rem]">
				{productData.map((item) => (
					<div className="shadow-md w-full md:w-[400px] h-[400px] flex flex-col gap-4 ">
						<img src={item.img} alt="/" className="w-[100%] h-[65%]" />
						<div className="px-4">
							<h2 className="text-[1.65rem] leading-[1.65rem]">{item.name}</h2>
							<p className="text-[#B4B4B4] text-[14px]">{item.shortDescription}</p>
						</div>
						<div className="flex justify-center mb-4">
							<Link to={`/product/${item.name}`}>
								<button className="px-6 bg-black text-white">Buy Now</button>
							</Link>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}

export default Products;
