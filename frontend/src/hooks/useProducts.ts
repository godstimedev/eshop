import { useQuery } from 'react-query';
import { axios } from '../library';
import { AppUrls } from '../constants/apiUrls';

export const useProducts = () => {
	const fetchProducts = () => axios.get('/api/product').then((response) => response?.data);

	return useQuery('all-products', fetchProducts);
};
