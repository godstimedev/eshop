import { useEffect } from 'react';
import { axiosPrivate } from '../library';
import { useAppSelector } from '../redux/store/store';

const useAxiosPrivate = () => {
	const { token } = useAppSelector((state: any) => state.auth);
	console.log(token);

	const tokens = localStorage.getItem('token');
	console.log(tokens);

	useEffect(() => {
		const requestInterceptor = axiosPrivate.interceptors.request.use(
			(config: any) => {
				if (!config?.headers['Authorization']) {
					config.headers['Authorization'] = `Bearer ${tokens}`;
				}

				return config;
			},

			(error) => Promise.reject(error)
		);

		return () => {
			axiosPrivate.interceptors.request.eject(requestInterceptor);
		};
	}, [token]);

	return axiosPrivate;
};

export default useAxiosPrivate;
