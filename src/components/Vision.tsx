import React from 'react';
import VisionBg from '../assets/images/visionBg.png';

type Props = {};

function Vision({}: Props) {
	return (
		<section className="md:px-[4rem] relative pt-[40%] md:pt-[0%]">
			<div
				style={{
					backgroundImage: `url(${VisionBg})`,
				}}
				className="h-[60vh]  md:h-[80vh] w-[100%] md:w-[90%]  bg-no-repeat bg-cover bg-center  mt-auto md:ml-auto grid  place-items-center "
			>
				<div className="absolute bg-[#F7F7F7] min-h-[43vh] w-[80%] sm:[60%] md:w-[45vw]  top-0 md:top-[50%] md:-translate-y-[50%] md:left-[4rem] flex flex-col justify-between p-8">
					<h1>Vision</h1>
					<p>
						Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas
						consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies.
						Pharetra sagittis sit aliquet at. Magna nam platea justo.
					</p>
					<div className="pt-4">
						<button className="text-left bg-[#111010] text-white px-6">Learn more</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Vision;
