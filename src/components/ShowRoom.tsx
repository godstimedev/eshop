import React from 'react';
import ShowRoomBg from '../assets/images/showroomBg.png';

type Props = {};

function ShowRoom({}: Props) {
	return (
		<section className="md:px-[4rem] relative pt-[40%] md:pt-[0%]">
			<div
				style={{
					backgroundImage: `url(${ShowRoomBg})`,
				}}
				className="h-[60vh]  md:h-[70vh] w-[100%] md:w-[58%]  bg-no-repeat bg-cover bg-center  mt-auto md:mr-auto grid  place-items-center "
			>
				<div className="absolute bg-[#F7F7F7] min-h-[43vh] w-[80%] sm:[60%] md:w-[45vw]  top-0 md:top-[50%] md:-translate-y-[50%] md:right-[4rem] flex flex-col justify-between py-[3rem] p-8">
					<h1>Our Showrooms</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
						been the industry's standard dummy text.
					</p>
					<div className="pt-4">
						<button className="text-left bg-[#111010] text-white px-6">Learn more</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ShowRoom;
