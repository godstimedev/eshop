import { useState } from 'react';
import { ReactComponent as Eye } from '../../../assets/svg/Eye.svg';
import { ReactComponent as EyeSlash } from '../../../assets/svg/EyeSlash.svg';
import { Link, useNavigate } from 'react-router-dom';
import { InputChangeEventType, SignUpData } from '../../../types';
import { useRegister } from '../../../hooks';

const Register = () => {
	const [formData, setFormData] = useState<SignUpData>({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	const handleInput: InputChangeEventType = (event, name, value) => {
		name = event?.target.name || name;
		value = event?.target.value || value;

		setFormData((prev) => ({ ...prev, [name as string]: value }));
	};

	const { mutate, isLoading, isError, error }: any = useRegister();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(formData);
		mutate(formData, {
			onSuccess: () => {
				navigate('/auth/login');
			},
		});
	};

	const [showPass, setShowPass] = useState('password');
	const [showSecondPass, setShowSecondPass] = useState('password');

	const showPassword = () => {
		setShowPass((prev) => (prev === 'password' ? 'text' : 'password'));
	};
	const showSecondPassword = () => {
		setShowSecondPass((prev) => (prev === 'password' ? 'text' : 'password'));
	};

	return (
		<div className="w-full h-full grid place-items-center ">
			<form className="flex flex-col gap-[2.5rem] " onSubmit={handleSubmit}>
				<div>
					<h1>Register</h1>
					<p>Welcome!, Please fill up your details.</p>
				</div>

				<div className="flex flex-col gap-[1rem] ">
					<label htmlFor="email">
						<input
							type="email"
							name="email"
							onChange={handleInput}
							value={formData.email}
							placeholder="Enter your email"
							className="block w-full py-2 px-4 border-2 border-gray-200 rounded-sm text-sm "
						/>
					</label>

					<label htmlFor="first_name">
						<input
							type="text"
							name="first_name"
							value={formData.first_name}
							onChange={handleInput}
							placeholder="Enter your Firstname"
							className="block w-full py-2 px-4 border-2 border-gray-200 rounded-sm text-sm "
						/>
					</label>

					<label htmlFor="last_name">
						<input
							type="text"
							name="last_name"
							value={formData.last_name}
							onChange={handleInput}
							placeholder="Enter your Lastname"
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
							type={showSecondPass}
							name="password"
							value={formData.password}
							onChange={handleInput}
							placeholder="Confirm your password"
							className="block w-full py-2 px-4 border-2 border-gray-200 rounded-sm text-sm "
						/>
						<span className="absolute right-2 top-2.5 cursor-pointer" onClick={showSecondPassword}>
							{showSecondPass === 'password' ? <Eye /> : <EyeSlash />}
						</span>
					</label>
				</div>

				<div className="flex flex-col gap-[1rem] text-center">
					<button
						className="text-white bg-black"
						onClick={handleSubmit}
						disabled={isLoading ? true : false}
					>
						Sign up
					</button>
					<Link to="/admin/login">
						<button className="focus:border-2 border-gray-500 ">Sign in</button>
					</Link>
				</div>
				{isError && (
					<>
						<h2>{error.message}</h2>
					</>
				)}
			</form>
		</div>
	);
};

export default Register;
