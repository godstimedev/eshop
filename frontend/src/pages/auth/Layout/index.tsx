import { Outlet } from 'react-router-dom';

type Props = {};

const Layout = (props: Props) => {
	return (
		<div className="flex h-[100vh]">
			<div className="bg-black w-[50%] h-full text-4xl text-white text-center flex flex-col items-center justify-center">
				Welcome Back!
			</div>

			<div className="w-[50%]">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
