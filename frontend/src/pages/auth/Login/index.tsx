import { useState } from 'react';
import { ReactComponent as Eye } from '../../../assets/svg/Eye.svg';
import { ReactComponent as EyeSlash } from '../../../assets/svg/EyeSlash.svg';
import { Link, useNavigate } from 'react-router-dom';
import { InputChangeEventType, LoginType } from '../../../types';
import { useLogin } from '../../../hooks';
import { useAppDispatch } from '../../../redux/store/store';
import { setAuth } from '../../../redux/features/authSlice';

type Props = {};

const Login = (props: Props) => {
	const [formData, setFormData] = useState<LoginType>({
		email: '',
		password: '',
	});

	const handleInput: InputChangeEventType = (event, name, value) => {
		name = event?.target.name || name;
		value = event?.target.value || value;

		setFormData((prev) => ({ ...prev, [name as string]: value }));
	};

	const dispatch = useAppDispatch();

	const { mutate, isLoading, isError, error }: any = useLogin();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(formData);

		mutate(formData, {
			onSuccess: (_data: any) => {
				dispatch(setAuth(_data?.data?.token));
				localStorage.setItem('token', _data?.data?.token);
				console.log(_data);
				navigate('/');
			},
		});
	};

	const [showPass, setShowPass] = useState('password');

	const showPassword = () => {
		setShowPass((prev) => (prev === 'password' ? 'text' : 'password'));
	};

	const navigate = useNavigate();
	return (
		<div className="w-full h-full grid place-items-center ">
			<form onSubmit={handleSubmit} className="flex flex-col gap-[2.5rem] ">
				<div>
					<h1>Log in</h1>
					<p>Welcome back!, Please enter your details.</p>
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

					<label htmlFor="password" className="relative">
						<input
							type={showPass}
							name="password"
							onChange={handleInput}
							value={formData.password}
							placeholder="Enter your password"
							className="block w-full py-2 px-4 border-2 border-gray-200 rounded-sm text-sm "
						/>
						<span className="absolute right-2 top-2.5 cursor-pointer" onClick={showPassword}>
							{showPass === 'password' ? <Eye /> : <EyeSlash />}
						</span>
					</label>
				</div>

				<div className="flex flex-col gap-[1rem] text-center">
					<button onClick={handleSubmit} className="text-white bg-black">
						Sign in
					</button>
					<Link to="/auth/register">
						<button className="focus:border-2 border-gray-500">Sign up</button>
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

export default Login;
