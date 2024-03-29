import { useState } from 'react';
import Logo from '../../assets/images/newLogo.png';

// svgs
import { ReactComponent as ArrowDown } from '../../assets/svg/ArrowDown.svg';
import { ReactComponent as Facebook } from '../../assets/svg/Facebook.svg';
import { ReactComponent as Twitter } from '../../assets/svg/Twitter.svg';
import { ReactComponent as Instagram } from '../../assets/svg/Instagram.svg';

type Props = {};

function Footer({}: Props) {
	const [showProd, setShowProd] = useState(false);
	const [showServ, setShowServ] = useState(false);
	const [showInf, setShowInf] = useState(false);

	return (
		<footer className="bg-[#111010] min-h-[40vh] w-full py-[2rem] px-[1.5rem] md:px-[4rem] mt-auto">
			<div className="grid grid-cols-1 md:grid-cols-4 md:items-start  text-white pb-[1.5rem]">
				<div className="flex flex-col justify-between h-[100%] gap-4 md:gap-0 pb-[1.5rem] md:pb-0">
					<img src={Logo} alt="/" className="cursor-pointer w-[55px] h-[55px] mx-auto " />
					<div className="hidden md:flex gap-4  md:justify-center md:pb-0">
						<Facebook className="cursor-pointer" />
						<Twitter className="cursor-pointer" />
						<Instagram className="cursor-pointer" />
					</div>
					{/* <div className="flex gap-4 justify-center md:justify-start pb-4 md:pb-0">
						<Facebook className="cursor-pointer" />
						<Twitter className="cursor-pointer" />
						<Instagram className="cursor-pointer" />
					</div> */}
				</div>

				<div>
					<h4
						onClick={() => setShowProd(!showProd)}
						className="pb-2 cursor-pointer font-semibold flex items-center "
					>
						Products
						<ArrowDown className="ml-auto md:hidden" />
					</h4>
					<div className={showProd ? 'md:block  flex flex-col mb-6' : 'hidden md:block'}>
						<p className="text-[#A4A4A4] hover:text-white cursor-pointer font-light text-sm">
							Sand Stone
						</p>
						<p className="text-[#A4A4A4] hover:text-white cursor-pointer font-light text-sm">Stone</p>
						<p className="text-[#A4A4A4] hover:text-white cursor-pointer font-light text-sm">Cement</p>
						<p className="text-[#A4A4A4] hover:text-white cursor-pointer font-light text-sm">
							Soft Stone
						</p>
					</div>
				</div>
				<div>
					<h4
						onClick={() => setShowServ(!showServ)}
						className="pb-2 cursor-pointer font-semibold flex items-center"
					>
						Services
						<ArrowDown className="ml-auto md:hidden" />
					</h4>
					<div className={showServ ? 'md:block  flex flex-col mb-6 ' : 'hidden md:block'}>
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
				</div>
				<div>
					<h4
						onClick={() => setShowInf(!showInf)}
						className="pb-2 cursor-pointer font-semibold flex items-center"
					>
						Contact information
						<ArrowDown className="ml-auto md:hidden" />
					</h4>
					<div className={showInf ? 'md:block  flex flex-col mb-6' : 'hidden md:block'}>
						<p className="text-white font-light text-sm">3181 Al Imam Saud Ibn Abdul Aziz Branch Rd,</p>
						<p className="text-white font-light text-sm">An Nuzhah, Riyadh 12474, </p>
						<p className="text-white font-light text-sm">Saudi Arabia</p>
					</div>
				</div>
			</div>
			<div className="md:pt-[3rem] px-[4rem] flex flex-col justify-center md:justify-start pt-[1.5rem]  border-t border-[#474747] md:border-none">
				<div className="flex gap-4 justify-center  pb-2 md:hidden">
					<Facebook className="cursor-pointer" />
					<Twitter className="cursor-pointer" />
					<Instagram className="cursor-pointer" />
				</div>
				<p className="text-white font-light text-xs text-center md:text-start">
					Copyright © 2022 | All Rights Reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
