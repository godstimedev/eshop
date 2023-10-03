import { NavLink } from 'react-router-dom';

const SideBar = () => {
	return (
		<aside className="w-60 min-h-screen border-r-2 border-black rounded-tr-xl rounded-br-xl flex flex-col gap-12 ">
			<div className="text-xl mt-12 px-6">Logo</div>
			<ul>
				<li className="px-6 py-2 cursor-pointer hover:text-white hover:bg-black rounded-lg">
					<NavLink to="admin/dashboard">Dashboard</NavLink>
				</li>
				<li className="px-6 py-2 cursor-pointer hover:text-white hover:bg-black rounded-lg">
					<NavLink to="admin/categories">Categories</NavLink>
				</li>
				<li className="px-6 py-2 cursor-pointer hover:text-white hover:bg-black rounded-lg">
					<NavLink to="admin/products">Products</NavLink>
				</li>
			</ul>
			<div className="mt-[auto] mb-12 px-6">Logout</div>
		</aside>
	);
};

export default SideBar;
