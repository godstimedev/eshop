import React from 'react';
import ProjectOne from '../assets/images/projectOne.png';

type Props = {};

function Projects({}: Props) {
	return (
		<section className="min-h-screen py-[2rem] px-[4rem] ">
			<div className="flex flex-col gap-4 items-center">
				<h1 className=" ">Projects</h1>
				<div className="w-[110px] border-b-4 border-[#C4C4C4]" />
				<p className="max-w-[670px] text-center">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
					the industry's standard dummy text.
				</p>
			</div>

			<div className="flex gap-6 py-4">
				<div className="flex flex-col gap-4">
					<img src={ProjectOne} alt="/" />
					<div className="text-center">
						<h2 className="text-[1.65rem] leading-[1.65rem]">Kingdom Tower</h2>
						<p className="text-[#B4B4B4] text-[14px]">Marble Flooring</p>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<img src={ProjectOne} alt="/" />
					<div className="text-center">
						<h2 className="text-[1.65rem] leading-[1.65rem]">Kingdom Tower</h2>
						<p className="text-[#B4B4B4] text-[14px]">Marble Flooring</p>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<img src={ProjectOne} alt="/" />
					<div className="text-center">
						<h2 className="text-[1.65rem] leading-[1.65rem]">Kingdom Tower</h2>
						<p className="text-[#B4B4B4] text-[14px]">Marble Flooring</p>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<img src={ProjectOne} alt="/" />
					<div className="text-center">
						<h2 className="text-[1.65rem] leading-[1.65rem]">Kingdom Tower</h2>
						<p className="text-[#B4B4B4] text-[14px]">Marble Flooring</p>
					</div>
				</div>
			</div>

			<div className="w-full flex mt-8">
				<button className="text-white bg-black w-[140px] mx-auto">View all</button>
			</div>
		</section>
	);
}

export default Projects;
