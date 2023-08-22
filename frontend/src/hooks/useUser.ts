import useAxiosPrivate from './useAxiosPrivate';
import { useQuery } from 'react-query';
import { AppUrls } from '../constants/apiUrls';

export const useUser = () => {
	const axiosPrivate = useAxiosPrivate();

	const fetchUser = () => axiosPrivate.get('/api/auth/user').then((response) => response?.data);

	return useQuery('user-detail', fetchUser);
};
