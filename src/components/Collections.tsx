import React from 'react';
import Tile1 from '../assets/images/tile1.png';

type Props = {};

function Collections({}: Props) {
	return (
		<section className="min-h-screen pb-[2rem] px-[4rem] hidden md:block">
			<div className="flex flex-col gap-4 items-center">
				<h1 className=" ">Tile Collections</h1>
				<div className="w-[110px] border-b-4 border-[#C4C4C4]" />
				<p className="max-w-[670px] text-center">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
					the industry's standard dummy text.
				</p>
			</div>

			<div className="grid grid-cols-4 gap-4 py-4">
				<div className="flex flex-col gap-4 pb-4 shadow-md">
					<img src={Tile1} alt="/" />
					<div className="text-center space-y-2">
						<h2 className="text-[1.65rem] leading-[1.65rem]">Zurich Vision 60×60</h2>
						<p className="text-[rgba(17, 16, 16, 0.5)] text-[14px]">
							{' '}
							<span className="line-through text-[#CACACA]">449.99$</span> 237.99$
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-4 pb-4 shadow-md">
					<img src={Tile1} alt="/" />
					<div className="text-center space-y-2">
						<h2 className="text-[1.65rem] leading-[1.65rem]">Zurich Vision 60×60</h2>
						<p className="text-[rgba(17, 16, 16, 0.5)] text-[14px]">
							{' '}
							<span className="line-through text-[#CACACA]">449.99$</span> 237.99$
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-4 pb-4 shadow-md">
					<img src={Tile1} alt="/" />
					<div className="text-center space-y-2">
						<h2 className="text-[1.65rem] leading-[1.65rem]">Zurich Vision 60×60</h2>
						<p className="text-[rgba(17, 16, 16, 0.5)] text-[14px]">
							{' '}
							<span className="line-through text-[#CACACA]">449.99$</span> 237.99$
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-4 pb-4 shadow-md">
					<img src={Tile1} alt="/" />
					<div className="text-center space-y-2">
						<h2 className="text-[1.65rem] leading-[1.65rem]">Zurich Vision 60×60</h2>
						<p className="text-[rgba(17, 16, 16, 0.5)] text-[14px]">
							{' '}
							<span className="line-through text-[#CACACA]">449.99$</span> 237.99$
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-4 pb-4 shadow-md">
					<img src={Tile1} alt="/" />
					<div className="text-center space-y-2">
						<h2 className="text-[1.65rem] leading-[1.65rem]">Zurich Vision 60×60</h2>
						<p className="text-[rgba(17, 16, 16, 0.5)] text-[14px]">
							{' '}
							<span className="line-through text-[#CACACA]">449.99$</span> 237.99$
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-4 pb-4 shadow-md">
					<img src={Tile1} alt="/" />
					<div className="text-center space-y-2">
						<h2 className="text-[1.65rem] leading-[1.65rem]">Zurich Vision 60×60</h2>
						<p className="text-[rgba(17, 16, 16, 0.5)] text-[14px]">
							{' '}
							<span className="line-through text-[#CACACA]">449.99$</span> 237.99$
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-4 pb-4 shadow-md">
					<img src={Tile1} alt="/" />
					<div className="text-center space-y-2">
						<h2 className="text-[1.65rem] leading-[1.65rem]">Zurich Vision 60×60</h2>
						<p className="text-[rgba(17, 16, 16, 0.5)] text-[14px]">
							{' '}
							<span className="line-through text-[#CACACA]">449.99$</span> 237.99$
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-4 pb-4 shadow-md">
					<img src={Tile1} alt="/" />
					<div className="text-center space-y-2">
						<h2 className="text-[1.65rem] leading-[1.65rem]">Zurich Vision 60×60</h2>
						<p className="text-[rgba(17, 16, 16, 0.5)] text-[14px]">
							{' '}
							<span className="line-through text-[#CACACA]">449.99$</span> 237.99$
						</p>
					</div>
				</div>
			</div>

			<div className="w-full flex mt-8">
				<button className="text-white bg-black min-w-[140px] px-4 mx-auto">more products</button>
			</div>
		</section>
	);
}

export default Collections;
