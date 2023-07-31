import { useEffect } from 'react';
import { axiosPrivate } from '../library';
import { useSelector } from 'react-redux';

const useAxiosPrivate = () => {
	const { accessToken } = useSelector((state: any) => state.auth.access);

	useEffect(() => {
		const requestInterceptor = axiosPrivate.interceptors.request.use(
			(config: any) => {
				if (!config?.headers['Authorization']) {
					config.headers['Authorization'] = `Bearer ${accessToken}`;
				}

				return config;
			},

			(error) => Promise.reject(error)
		);

		return () => {
			axiosPrivate.interceptors.request.eject(requestInterceptor);
		};
	}, [accessToken]);

	return axiosPrivate;
};

export default useAxiosPrivate;
