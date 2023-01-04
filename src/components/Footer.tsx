import React from 'react';
import Logo from '../assets/images/logo.png';

// svgs
import { ReactComponent as Facebook } from '../assets/svg/Facebook.svg';
import { ReactComponent as Twitter } from '../assets/svg/Twitter.svg';
import { ReactComponent as Instagram } from '../assets/svg/Instagram.svg';

type Props = {};

function Footer({}: Props) {
	return (
		<footer className="bg-[#111010] h-[40vh] w-full py-[4rem] px-[4rem]  ">
			<div className="grid grid-cols-4 items-start place-items-center text-white">
				<div className="flex flex-col justify-between h-[100%]">
					<img src={Logo} alt="/" className="cursor-pointer" />
					<div className="flex gap-4">
						<Facebook className="cursor-pointer" />
						<Twitter className="cursor-pointer" />
						<Instagram className="cursor-pointer" />
					</div>
				</div>
				<div>
					<h4 className="pb-2  font-semibold">Products</h4>
					<p className="text-[#A4A4A4] hover:text-white cursor-pointer font-light text-sm">Sand Stone</p>
					<p className="text-[#A4A4A4] hover:text-white cursor-pointer font-light text-sm">Stone</p>
					<p className="text-[#A4A4A4] hover:text-white cursor-pointer font-light text-sm">Cement</p>
					<p className="text-[#A4A4A4] hover:text-white cursor-pointer font-light text-sm">Soft Stone</p>
				</div>
				<div>
					<h4 className="pb-2  font-semibold">Services</h4>
					<p className="text-[#A4A4A4] hover:text-white cursor-pointer font-light text-sm">
						Measurement Service
					</p>
					<p className="text-[#A4A4A4] hover:text-white cursor-pointer font-light text-sm">
						Product Advice
					</p>
					<p className="text-[#A4A4A4] hover:text-white cursor-pointer font-light text-sm">
						Interior Design
					</p>
				</div>
				<div>
					<h4 className="pb-2  font-semibold">Contact information</h4>
					<p className="text-white font-light text-sm">3181 Al Imam Saud Ibn Abdul Aziz Branch Rd,</p>
					<p className="text-white font-light text-sm">An Nuzhah, Riyadh 12474, </p>
					<p className="text-white font-light text-sm">Saudi Arabia</p>
				</div>
			</div>
			<div className="mt-[3rem] px-[4rem]">
				<p className="text-white font-light text-xs">Copyright © 2022 | All Rights Reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
