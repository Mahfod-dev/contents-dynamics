import customFetch from './customFetch';
import { ContentTypes } from '../lib/contents';
import { toast } from 'react-toastify';

export const loaderContents = async () => {
	try {
		const { data } = await customFetch.get<ContentTypes>('/contents');
		return data;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		toast.error(error?.response?.data?.msg);
		return error;
	}
};

export const loaderLanguages = async () => {
	try {
		const { data } = await customFetch.get('/contents/languages');
		console.log(data);
		return data;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		toast.error(error?.response?.data?.msg);
		return error;
	}
};
