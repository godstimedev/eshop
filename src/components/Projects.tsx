import React, { useState } from 'react';

// svg
import { ReactComponent as ArrowLeft } from '../assets/svg/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '../assets/svg/ArrowRight.svg';

import { projectData } from '../data/projectData';

type Props = {};

function Projects({}: Props) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const nextIndex = isFirstSlide ? projectData.length - 1 : currentIndex - 1;
		setCurrentIndex(nextIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === 3;
		const nextIndex = isLastSlide ? projectData.length - 4 : currentIndex + 1;
		setCurrentIndex(nextIndex);
	};

	// const goToSlide = (index: number) => {
	// 	setCurrentIndex(index);
	// };

	return (
		<section className="min-h-screen py-[2rem] md:px-[4rem] px-4">
			<div className="flex flex-col gap-4 items-center">
				<h1 className=" ">Projects</h1>
				<div className="w-[110px] border-b-4 border-[#C4C4C4]" />
				<p className="max-w-[670px] text-center">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
					the industry's standard dummy text.
				</p>
			</div>

			<div className="hidden md:flex gap-6 py-4">
				{projectData.map((item, index) => (
					<div key={index} className="flex flex-col gap-4">
						<img src={item.img} alt="/" />
						<div className="text-center">
							<h2 className="text-[1.65rem] leading-[1.65rem]">{item.title}</h2>
							<p className="text-[#B4B4B4] text-[14px]">{item.description}</p>
						</div>
					</div>
				))}
			</div>

			{/* for small screens */}
			<div className="md:hidden group relative h-[70vh] mt-6">
				<div className="w-full flex justify-between items-center absolute top-[40%] z-10">
					<ArrowLeft className="cursor-pointer hidden group-hover:block" onClick={() => prevSlide()} />
					<ArrowRight className="cursor-pointer hidden group-hover:block" onClick={() => nextSlide()} />
				</div>

				<div
					className="relative  h-[90%] w-[100%] flex flex-col gap-4 items-center ease-in-out duration-500"
					id="container"
				>
					<img src={projectData[currentIndex].img} alt="/" className="h-[95%] w-[100%] object-cover " />
					<div className="text-center">
						<h2 className="text-[1.65rem] leading-[1.65rem]">{projectData[currentIndex].title}</h2>
						<p className="text-[#B4B4B4] text-[14px]">{projectData[currentIndex].description}</p>
					</div>
				</div>
			</div>

			<div className="w-full flex mt-4 md:mt-8">
				<button className="text-white bg-black w-[140px] mx-auto">View all</button>
			</div>
		</section>
	);
}

export default Projects;
