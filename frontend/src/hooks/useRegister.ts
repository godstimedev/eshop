import { useMutation } from 'react-query';
import { axios } from '../library';
import { AppUrls } from '../constants/apiUrls';
import { SignUpData } from '../types';

const submitFormData = (data: SignUpData) => {
	return axios.post(AppUrls.auth.register, data);
};

const useRegister = () => {
	return useMutation(submitFormData);
};

export default useRegister;
