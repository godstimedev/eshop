import { useState } from 'react';
import { ReactComponent as Eye } from '../../../assets/svg/Eye.svg';
import { ReactComponent as EyeSlash } from '../../../assets/svg/EyeSlash.svg';
import { Link } from 'react-router-dom';

type Props = {};

const Register = (props: Props) => {
	const [showPass, setShowPass] = useState('password');

	const showPassword = () => {
		setShowPass((prev) => (prev === 'password' ? 'text' : 'password'));
	};

	return (
		<div className="w-full h-full grid place-items-center ">
			<form className="flex flex-col gap-[2.5rem] ">
				<div>
					<h1>Register</h1>
					<p>Welcome!, Please fill up your details.</p>
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
					<label htmlFor="password" className="relative">
						<input
							type={showPass}
							name="password"
							placeholder="Confirm your password"
							className="block w-full py-2 px-4 border-2 border-gray-200 rounded-sm text-sm "
						/>
						<span className="absolute right-2 top-2.5 cursor-pointer" onClick={showPassword}>
							{showPass === 'password' ? <Eye /> : <EyeSlash />}
						</span>
					</label>
				</div>

				<div className="flex flex-col gap-[1rem] text-center">
					<button className="text-white bg-black">Sign up</button>
					<Link to="/auth/login">
						<button className="focus:border-2 border-gray-500 ">Sign in</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Register;
