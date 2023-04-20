import { useState } from 'react';
import { ReactComponent as Eye } from '../../../assets/svg/Eye.svg';
import { ReactComponent as EyeSlash } from '../../../assets/svg/EyeSlash.svg';
import { Link, useNavigate } from 'react-router-dom';

type Props = {};

const Login = (props: Props) => {
	const [showPass, setShowPass] = useState('password');

	const showPassword = () => {
		setShowPass((prev) => (prev === 'password' ? 'text' : 'password'));
	};

	const navigate = useNavigate();
	return (
		<div className="w-full h-full grid place-items-center ">
			<form className="flex flex-col gap-[2.5rem] ">
				<div>
					<h1>Log in</h1>
					<p>Welcome back!, Please enter your details.</p>
				</div>

				<div className="flex flex-col gap-[1rem] ">
					<label htmlFor="email">
						<input
							type="email"
							name="email"
							placeholder="Enter your email"
							className="block w-full py-2 px-4 border-2 border-gray-200 rounded-sm text-sm "
						/>
					</label>

					<label htmlFor="password" className="relative">
						<input
							type={showPass}
							name="password"
							placeholder="Enter your password"
							className="block w-full py-2 px-4 border-2 border-gray-200 rounded-sm text-sm "
						/>
						<span className="absolute right-2 top-2.5 cursor-pointer" onClick={showPassword}>
							{showPass === 'password' ? <Eye /> : <EyeSlash />}
						</span>
					</label>
				</div>

				<div className="flex flex-col gap-[1rem] text-center">
					<button className="text-white bg-black" onClick={() => navigate('/')}>
						Sign in
					</button>
					<Link to="/auth/register">
						<button className="focus:border-2 border-gray-500">Sign up</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
