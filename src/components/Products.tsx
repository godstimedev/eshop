import React from 'react';
import ProductOne from '../assets/images/productOne.png';
import ProductTwo from '../assets/images/productTwo.png';
import ProductThree from '../assets/images/productThree.png';
import ProductFour from '../assets/images/productFour.png';

import productData from '../data/productData.json';

type Props = {};

function Products({}: Props) {
	return (
		<section className="min-h-screen py-[4rem] px-[4rem] ">
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
				<div className="relative row-span-2 h-[75vh] w-[100%] flex flex-col items-center">
					<img src={ProductOne} alt="/" className="h-[95%] w-[100%]" />
					<div className="absolute bottom-0 bg-[#111010] text-white text-center p-4 max-w-[95%] mx-auto place-items-center">
						<h2 className="text-[1.65rem] leading-[1.65rem]">Bathroom Tiles</h2>
						<p className="text-[#B4B4B4] text-[14px]">
							Ante mus blandit sapien sociosqu per consequat ad.
						</p>
					</div>
				</div>
				{/* h-[90%] */}
				<div className="relative row-span-2 h-[75vh]  flex flex-col items-center">
					<img src={ProductTwo} alt="/" className="h-[95%] w-[100%]" />
					<div className="absolute bottom-0 bg-[#111010] text-white text-center p-4 max-w-[95%] mx-auto place-items-center">
						<h2 className="text-[1.65rem] leading-[1.65rem]">Bathroom Tiles</h2>
						<p className="text-[#B4B4B4] text-[14px]">
							Ante mus blandit sapien sociosqu per consequat ad.
						</p>
					</div>
				</div>
				<div className="relative row-span-1  flex flex-col items-center">
					<img src={ProductThree} alt="/" className="h-[85%] w-[100%]" />
					<div className="absolute bottom-0 bg-[#111010] text-white text-center p-4 max-w-[95%] mx-auto place-items-center">
						<h2 className="text-[1.65rem] leading-[1.65rem]">Bathroom Tiles</h2>
						<p className="text-[#B4B4B4] text-[14px]">
							Ante mus blandit sapien sociosqu per consequat ad.
						</p>
					</div>
				</div>
				<div className="relative row-span-1  flex flex-col items-center">
					<img src={ProductFour} alt="/" className="h-[89%] w-[100%]" />
					<div className="absolute bottom-0 bg-[#111010] text-white text-center p-4 max-w-[95%] mx-auto place-items-center">
						<h2 className="text-[1.65rem] leading-[1.65rem]">Bathroom Tiles</h2>
						<p className="text-[#B4B4B4] text-[14px]">
							Ante mus blandit sapien sociosqu per consequat ad.
						</p>
					</div>
				</div>
			</div>

			{/* for small screens */}
			<div className="md:hidden"></div>
		</section>
	);
}

export default Products;
