import React, { useState } from 'react';
import ProductImg from '../assets/images/productImg.png';
import ProductOne from '../assets/images/productOne.png';
import ProductTwo from '../assets/images/productTwo.png';
import ProductThree from '../assets/images/productThree.png';
import ProductFour from '../assets/images/productFour.png';
import { ReactComponent as Like } from '../assets/svg/Like.svg';

type Props = {};

function ProductDetails({}: Props) {
	const [active, setActive] = useState(1);

	return (
		<main className="px-[6rem] my-[3rem] flex flex-col gap-[6rem]">
			<section className="flex gap-8">
				<div className="w-[50%] flex flex-col gap-4">
					<img src={ProductImg} alt="/" />
					<div className="flex gap-8 justify-center">
						<img src={ProductOne} alt="/" className="h-[100px] w-[120px] cursor-pointer" />
						<img src={ProductTwo} alt="/" className="h-[100px] w-[120px] cursor-pointer" />
						<img src={ProductThree} alt="/" className="h-[100px] w-[120px] cursor-pointer" />
					</div>
				</div>

				<div className="w-[50%] flex flex-col gap-[4rem]">
					<div>
						{' '}
						<h1>Product Name</h1>
						<h2>199,50 SAR</h2>
						<p className="mt-6">
							Product Short Description senectus et netus et malesuada fames ac turpis egestas. Vesitbulum
							tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
							quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend{' '}
						</p>
					</div>

					<div>
						<div className="flex gap-4">
							<div className="flex gap-6 items-center border border-[#000] px-4">
								<span className="cursor-pointer">-</span>
								<span>1</span>
								<span className="cursor-pointer">+</span>
							</div>
							<button className="bg-[#22222B] text-white px-6">Add to cart</button>
							<button className="border border-[#000] px-2">
								<Like />
							</button>
						</div>
						<ul className="list-disc pl-[1rem] mt-6">
							<li>Lorem ipsum dolor sit amet,</li>
							<li>Lorem ipsum dolor sit amet,</li>
							<li>Lorem ipsum dolor sit amet,</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="">
				<div className="flex gap-4 justify-center items-center">
					<h4
						onClick={() => setActive(1)}
						className={
							active === 1
								? 'cursor-pointer font-semibold text-lg text-[#979797]'
								: 'cursor-pointer font-semibold text-lg'
						}
					>
						Description
					</h4>
					<h4
						onClick={() => setActive(2)}
						className={
							active === 2
								? 'cursor-pointer font-semibold text-lg text-[#979797]'
								: 'cursor-pointer font-semibold text-lg'
						}
					>
						Details
					</h4>
					<h4
						onClick={() => setActive(3)}
						className={
							active === 3
								? 'cursor-pointer font-semibold text-lg text-[#979797]'
								: 'cursor-pointer font-semibold text-lg'
						}
					>
						Reviews(0)
					</h4>
				</div>
				<div className="max-w-[1020px] mx-auto">
					{active === 1 && (
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare euismod arcu, ac
							laoreet metus pulvinar feugiat. Praesent in feugiat ante, a dictum nunc. Pellentesque
							convallis tortor quis purus finibus aliquet. In hac habitasse platea dictumst. Proin
							vestibulum ante ac faucibus tristique. Integer quis efficitur dolor, at dignissim dolor.
						</p>
					)}
					{active === 2 && <p>Lorem ipsum dolor sit amet,</p>}
					{active === 3 && <p>Lorem ipsum at dignissim dolor 333.</p>}
				</div>
			</section>
		</main>
	);
}

export default ProductDetails;
