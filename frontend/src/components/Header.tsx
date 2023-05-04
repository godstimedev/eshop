import React, { useState } from 'react';
import { useClickOutside } from '@mantine/hooks';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/newLogo.png';
import { ReactComponent as Search } from '../assets/svg/Search.svg';
import { ReactComponent as Cart } from '../assets/svg/Cart.svg';
import { ReactComponent as Like } from '../assets/svg/Like.svg';
import { ReactComponent as Avatar } from '../assets/svg/Avatar.svg';
import { ReactComponent as Menu } from '../assets/svg/Menu.svg';
import { useAppSelector } from '../redux/store/store';

type Props = {};

function Header({}: Props) {
	const [nav, setNav] = useState(false);
	const ref = useClickOutside(() => setNav(false));

	const { cartItems } = useAppSelector((store) => store.cart);
	console.log(cartItems.length);

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
						<li className="navItems ">Spaces</li>
						<li className="navItems ">
							<NavLink to="products">Products & Services</NavLink>
						</li>
						<li className="navItems ">Showrooms</li>
						<li className="navItems ">Company</li>
						<li className="navItems ">Media</li>
						<li className="navItems ">Contact</li>
						<div className="flex gap-3">
							<Like className="cursor-pointer" />
							<NavLink to="/auth/login">
								<Avatar className="cursor-pointer" />
							</NavLink>
						</div>
					</ul>
				</div>
			</div>

			<div>
				<img src={Logo} alt="Logo" className=" w-[55px] h-[55px]" />
			</div>

			<nav className="hidden lg:flex items-center space-x-10">
				<Search className="cursor-pointer" />
				<ul className="flex space-x-5">
					<li className="navItems">
						<NavLink to="/">Home</NavLink>
					</li>
					<li className="navItems ">Spaces</li>
					<li className="navItems ">
						<NavLink to="products">Products & Services</NavLink>
					</li>
					<li className="navItems ">Showrooms</li>
					<li className="navItems ">Company</li>
					<li className="navItems ">Media</li>
					<li className="navItems ">Contact</li>
				</ul>
				<div className="flex space-x-5">
					<Link to="/cart">
						<div className="relative">
							<Cart className="cursor-pointer" />
							{cartItems.length > 0 && (
								<span className="absolute top-[-.8rem] right-[-.5rem] bg-black rounded-full text-white p-1 leading-3 text-xs">
									{cartItems.length}
								</span>
							)}
						</div>
					</Link>
					<Like className="cursor-pointer" />
					<NavLink to="/auth/login">
						<Avatar className="cursor-pointer" />
					</NavLink>
				</div>
			</nav>
			<div className=" lg:hidden flex space-x-5 ">
				<Link to="/cart">
					<div className="relative">
						<Cart className="cursor-pointer" />
						{cartItems.length > 0 && (
							<span className="absolute top-[-.8rem] right-[-.5rem] bg-black rounded-full text-white p-1 leading-3 text-xs">
								{cartItems.length}
							</span>
						)}
					</div>
				</Link>
			</div>
		</header>
	);
}

export default Header;
