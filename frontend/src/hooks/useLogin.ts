import { useMutation } from 'react-query';
import { axios } from '../library';
import { AppUrls } from '../constants/apiUrls';
import { LoginType } from '../types';

const submitLoginDetails = (data: LoginType) => {
	return axios.post(AppUrls.auth.login, data);
};

const useLogin = () => {
	return useMutation(submitLoginDetails);
};

export default useLogin;
