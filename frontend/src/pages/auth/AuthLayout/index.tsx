import { Outlet } from 'react-router-dom';

type Props = {};

const AuthLayout = (props: Props) => {
	return (
		<div className="flex flex-col md:flex-row  md:h-[100vh]">
			<div className="bg-black md:w-[50%] h-[100vh]  text-4xl text-white text-center flex flex-col items-center justify-center">
				Welcome Back!
			</div>

			<div className="md:w-[50%] h-[100vh]">
				<Outlet />
			</div>
		</div>
	);
};

export default AuthLayout;
