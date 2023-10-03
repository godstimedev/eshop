import React from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../data/productData';
import { useProducts } from '../hooks';
import { categories } from '../data/extras';

type Props = {};

function Products({}: Props) {
	const { data, isLoading, isError, error } = useProducts();

	return (
		<div className="min-h-[100vh] px-[2rem] md:px-[6rem] my-[2rem]">
			<h1 className="mb-[2rem] text-center">Products</h1>

			<div className="flex gap-10">
				<section className="w-56 h-fit border border-gray-400 rounded-md p-6 ">
					<h3 className="text-xl font-bold">Categories</h3>
					<ul className="mt-4">
						{categories.map((category) => (
							<li className="cursor-pointer mt-2" key={category}>
								{category}
							</li>
						))}
					</ul>
				</section>

				<section className="grid grid-cols-1 lg:grid-cols-2 items-center place-items-center gap-[4rem] flex-1">
					{productData.map((item) => (
						<div
							data-aos="zoom-in"
							className="shadow-md w-full md:w-[400px] h-[400px] flex flex-col gap-4 "
						>
							<img loading="lazy" src={item.img} alt="/" className="w-[100%] h-[65%]" />
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

					<div>
						{data?.data?.map((product: any) => (
							<h2>{product.name}</h2>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}

export default Products;
