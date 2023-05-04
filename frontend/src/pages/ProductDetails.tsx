import React, { useState } from 'react';
import ProductImg from '../assets/images/productImg.png';
import ProductOne from '../assets/images/productOne.png';
import ProductTwo from '../assets/images/productTwo.png';
import ProductThree from '../assets/images/productThree.png';
// import ProductFour from '../assets/images/productFour.png';
import { ReactComponent as Like } from '../assets/svg/Like.svg';
import { useParams } from 'react-router-dom';
import { productData } from '../data/productData';
import { useAppDispatch, useAppSelector } from '../redux/store/store';

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// redux
import { addItems, removeItem } from '../redux/features/cartSlice';

type Props = {};

function ProductDetails({}: Props) {
	// cart
	const dispatch = useAppDispatch();
	const { cartItems } = useAppSelector((store) => store.cart);

	//params
	const { id } = useParams();
	const product: any = productData.find((item) => item.name === id);

	const [btnText, setBtnText] = useState('Add to cart');

	// toastify function
	const notify = () => toast('Item already in cart', { theme: 'dark', hideProgressBar: true });

	const handleButton = (product: any) => {
		if (btnText === 'Add to cart') {
			if (cartItems.find((item) => item.name === product.name)) {
				notify();
				return null;
			} else {
				dispatch(addItems(product));
			}
			setBtnText('Remove from cart');
		} else {
			dispatch(removeItem(product));
			setBtnText('Add to cart');
		}
	};

	// slider
	const [activeImg, setActiveImg] = useState(1);
	const [active, setActive] = useState(1);

	return (
		<main className="px-[1rem] lg:px-[6rem] my-[3rem] flex flex-col gap-[6rem]">
			<section className="flex flex-col md:flex-row gap-8">
				<div className="w-full md:w-[50%] flex justify-center flex-col gap-4">
					{activeImg === 1 && (
						<img loading="lazy" src={ProductImg} alt="/" className="w-fit h-[60vh] object-cover" />
					)}
					{activeImg === 2 && (
						<img loading="lazy" src={ProductOne} alt="/" className="w-full h-[60vh] object-cover" />
					)}
					{activeImg === 3 && (
						<img loading="lazy" src={ProductTwo} alt="/" className="w-full h-[60vh] object-cover" />
					)}
					{activeImg === 4 && (
						<img src={ProductThree} alt="/" className="w-full h-[60vh] object-cover" />
					)}

					<div className="flex gap-8 justify-center">
						<img
							src={ProductImg}
							alt="/"
							className="h-[60px] w-[80px] lg:h-[100px] lg:w-[120px] cursor-pointer object-cover"
							onClick={() => setActiveImg(1)}
						/>
						<img
							src={ProductOne}
							alt="/"
							className="h-[60px] w-[80px] lg:h-[100px] lg:w-[120px] cursor-pointer object-cover"
							onClick={() => setActiveImg(2)}
						/>
						<img
							src={ProductTwo}
							alt="/"
							className="h-[60px] w-[80px] lg:h-[100px] lg:w-[120px] cursor-pointer object-cover"
							onClick={() => setActiveImg(3)}
						/>
						<img
							src={ProductThree}
							alt="/"
							className="h-[60px] w-[80px] lg:h-[100px] lg:w-[120px] cursor-pointer object-cover"
							onClick={() => setActiveImg(4)}
						/>
					</div>
				</div>

				<div className="w-full md:w-[50%] flex flex-col gap-[4rem]">
					<div>
						{' '}
						<h1>{product?.name}</h1>
						<h2>{product?.price} SAR</h2>
						<p className="mt-6">{product?.fullDescription} </p>
					</div>

					<div>
						<div className="flex gap-4">
							{/* <div className="flex gap-6 items-center border border-[#000] px-4">
								<span onClick={() => dispatch(decrement(product))} className="cursor-pointer">
									-
								</span>
								<span>{quantity}</span>
								<span onClick={() => dispatch(increment(product))} className="cursor-pointer">
									+
								</span>
							</div> */}
							<button
								onClick={() => handleButton(product)}
								className="bg-[#22222B] text-white px-6 text-sm md:font-xl"
							>
								{btnText}
							</button>
							<button className="border border-[#000] px-2">
								<Like />
							</button>
						</div>
						<ul className="list-disc pl-[1rem] mt-6">
							<li>Lorem ipsum dolor sit amet,</li>
							<li>Lorem ipsum dolor sit amet,</li>
							<li>Lorem ipsum dolor sit amet,</li>
						</ul>
						<ToastContainer />
					</div>
				</div>
			</section>

			<section>
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
					{active === 2 && (
						<p>
							Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Repudiandae autem qui obcaecati rerum hic quis?
						</p>
					)}
					{active === 3 && (
						<p>
							Lorem ipsum at dignissim dolor 333. Lorem ipsum dolor sit amet consectetur adipisicing elit.
							In est suscipit iste ratione quod perferendis ab cumque illo, similique sapiente.
						</p>
					)}
				</div>
			</section>
		</main>
	);
}

export default ProductDetails;
