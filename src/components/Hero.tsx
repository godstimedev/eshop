import React from 'react';
import BannerImg from '../assets/images/heroBanner.png';

type Props = {};

function Hero({}: Props) {
	return (
		<section className="relative  h-[calc(100vh-7.8rem)] md:h-fit">
			<div
				className=" min-h-[50vh] bg-no-repeat bg-cover bg-[15%] md:bg-center  grid  place-items-center"
				style={{
					backgroundImage: `url(${BannerImg})`,
				}}
			>
				<div className="hero--card w-[388px] md:w-[520px] min-h-[260px] absolute top-[50%] md:right-20 md:top-12 flex flex-col justify-between gap-2  text-white p-4">
					<h1 className=" text-center">New Generation Ceramic Tile </h1>
					<p className="text-white">
						Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas
						consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies.
						Pharetra sagittis sit aliquet at. Magna nam platea justo.
					</p>
					<button className="text-black bg-white w-[130px]">Learn more</button>
				</div>
			</div>
		</section>
	);
}

export default Hero;
