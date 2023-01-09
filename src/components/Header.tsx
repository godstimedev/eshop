import React, { useState } from 'react';
import { useClickOutside } from '@mantine/hooks';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/logoBlack.png';
import { ReactComponent as Search } from '../assets/svg/Search.svg';
import { ReactComponent as Cart } from '../assets/svg/Cart.svg';
import { ReactComponent as Like } from '../assets/svg/Like.svg';
import { ReactComponent as Avatar } from '../assets/svg/Avatar.svg';
import { ReactComponent as Menu } from '../assets/svg/Menu.svg';

type Props = {};

function Header({}: Props) {
	const [nav, setNav] = useState(false);
	const ref = useClickOutside(() => setNav(false));

	return (
		<header className="w-full flex justify-between lg:flex-col lg:gap-4 items-center p-4">
			<Menu className="lg:hidden cursor-pointer" onClick={() => setNav(!nav)} />

			<div
				ref={ref}
				className={
					nav
						? ` transform translate-x-[0%] transition-all duration-500 fixed top-0 left-0 bottom-0 bg-white w-[60%] p-4 z-10`
						: ` transform translate-x-[-100%] transition-all duration-500 fixed top-0 left-0 bottom-0  w-[60%]  bg-white p-4 z-10`
				}
			>
				<div className="flex flex-col gap-[6rem] my-[1.4rem]">
					<Menu className="lg:hidden cursor-pointer" onClick={() => setNav(!nav)} />
					<ul className="flex flex-col space-y-8 ">
						<li className="navItems">
							<NavLink to="/">Home</NavLink>
						</li>
						<li className="navItems cursor-pointer">Spaces</li>
						<li className="navItems cursor-pointer">Products & Services</li>
						<li className="navItems cursor-pointer">Showrooms</li>
						<li className="navItems cursor-pointer">Company</li>
						<li className="navItems cursor-pointer">Media</li>
						<li className="navItems cursor-pointer">Contact</li>
					</ul>
				</div>
			</div>

			<div>
				<img src={Logo} alt="Logo" className="cursor-pointer" />
			</div>

			<nav className="hidden lg:flex items-center space-x-10">
				<Search className="cursor-pointer" />
				<ul className="flex space-x-5">
					<li className="navItems">
						<NavLink to="/">Home</NavLink>
					</li>
					<li className="navItems cursor-pointer">Spaces</li>
					<li className="navItems cursor-pointer">Products & Services</li>
					<li className="navItems cursor-pointer">Showrooms</li>
					<li className="navItems cursor-pointer">Company</li>
					<li className="navItems cursor-pointer">Media</li>
					<li className="navItems cursor-pointer">Contact</li>
				</ul>
				<div className="flex space-x-5">
					<Link to="/cart">
						<Cart className="cursor-pointer" />
					</Link>
					<Like className="cursor-pointer" />
					<Avatar className="cursor-pointer" />
				</div>
			</nav>
			<div className=" lg:hidden flex space-x-5 ">
				<Link to="/cart">
					<Cart className="cursor-pointer" />
				</Link>
				<Like className="cursor-pointer" />
				<Avatar className="cursor-pointer" />
			</div>
		</header>
	);
}

export default Header;
