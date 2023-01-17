import React, { useState } from 'react';

// svg
import { ReactComponent as ArrowLeft } from '../assets/svg/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '../assets/svg/ArrowRight.svg';

import { productData } from '../data/productData';
import { Link } from 'react-router-dom';

type Props = {};

function Products({}: Props) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const nextIndex = isFirstSlide ? productData.length - 1 : currentIndex - 1;
		setCurrentIndex(nextIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === 3;
		const nextIndex = isLastSlide ? productData.length - 4 : currentIndex + 1;
		setCurrentIndex(nextIndex);
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	// const scroll = document.getElementById('container');
	// scroll?.scrollTo({
	// 	left: currentIndex === 0 ? 0 : currentIndex - 1,
	// 	behavior: 'smooth',
	// });
	// console.log(scroll);

	return (
		<section className="min-h-screen py-[4rem] md:px-[4rem] px-4">
			<div className="flex flex-col gap-4 items-center">
				<h1 className=" ">Products</h1>
				<div className="w-[110px] border-b-4 border-[#C4C4C4]" />
				<p className="max-w-[670px] text-center">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
					the industry's standard dummy text.
				</p>
			</div>
			{/* for large screens */}
			<div className="hidden md:grid grid-cols-3  gap-4 mt-4">
				<div
					data-aos="fade-right"
					className="relative row-span-2 h-[75vh] w-[100%] flex flex-col items-center"
				>
					<img src={productData[0].img} alt="/" className="h-[95%] w-[100%]" />
					<div className="absolute bottom-0 bg-[#111010] text-white text-center p-4 max-w-[95%] mx-auto place-items-center">
						<Link to={`/product/${productData[0].name}`}>
							<h2 className="text-[1.65rem] leading-[1.65rem]">{productData[0].name}</h2>
							<p className="text-[#B4B4B4] text-[14px]">{productData[0].shortDescription}</p>
						</Link>
					</div>
				</div>

				<div data-aos="flip-left" className="relative row-span-2 h-[75vh]  flex flex-col items-center">
					<img src={productData[1].img} alt="/" className="h-[95%] w-[100%]" />
					<div className="absolute bottom-0 bg-[#111010] text-white text-center p-4 max-w-[95%] mx-auto place-items-center">
						<Link to={`/product/${productData[1].name}`}>
							<h2 className="text-[1.65rem] leading-[1.65rem]">{productData[1].name}</h2>
							<p className="text-[#B4B4B4] text-[14px]">{productData[1].shortDescription}</p>
						</Link>
					</div>
				</div>

				<div data-aos="fade-down" className="relative row-span-1  flex flex-col items-center">
					<img src={productData[2].img} alt="/" className="h-[85%] w-[100%]" />
					<div className="absolute bottom-0 bg-[#111010] text-white text-center p-4 max-w-[95%] mx-auto place-items-center">
						<Link to={`/product/${productData[2].name}`}>
							<h2 className="text-[1.65rem] leading-[1.65rem]">{productData[2].name}</h2>
							<p className="text-[#B4B4B4] text-[14px]">{productData[2].shortDescription}</p>
						</Link>
					</div>
				</div>

				<div data-aos="fade-up" className="relative row-span-1  flex flex-col items-center">
					<img src={productData[3].img} alt="/" className="h-[89%] w-[100%]" />
					<div className="absolute bottom-0 bg-[#111010] text-white text-center p-4 max-w-[95%] mx-auto place-items-center">
						<Link to={`/product/${productData[3].name}`}>
							<h2 className="text-[1.65rem] leading-[1.65rem]">{productData[3].name}</h2>
							<p className="text-[#B4B4B4] text-[14px]">{productData[3].shortDescription}</p>
						</Link>
					</div>
				</div>
			</div>

			{/* for small screens */}
			<div className="md:hidden group relative h-[60vh] mt-6">
				<div className="w-full flex justify-between items-center absolute top-[40%] z-10">
					<ArrowLeft className="cursor-pointer hidden group-hover:block" onClick={() => prevSlide()} />
					<ArrowRight className="cursor-pointer hidden group-hover:block" onClick={() => nextSlide()} />
				</div>

				<div
					className="relative row-span-2 h-[100%] w-[100%] flex flex-col items-center ease-in-out duration-500"
					id="container"
				>
					<img src={productData[currentIndex].img} alt="/" className="h-[95%] w-[100%] object-cover " />
					<div className="absolute bottom-0 bg-[#111010] text-white text-center p-4 w-[95%] mx-auto place-items-center">
						<Link to={`/product/${productData[currentIndex].name}`}>
							<h2 className="text-[1.65rem] leading-[1.65rem]">{productData[currentIndex].name}</h2>
							<p className="text-[#B4B4B4] text-[14px]">{productData[currentIndex].shortDescription}</p>
						</Link>
					</div>
				</div>

				<div className="flex gap-2 justify-center my-4">
					{productData.map((item, index) => (
						<div
							key={index}
							onClick={() => goToSlide(index)}
							className={
								index === currentIndex
									? 'w-2 h-2 bg-[#333] cursor-pointer'
									: 'w-2 h-2 bg-gray-400 cursor-pointer'
							}
						></div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Products;
