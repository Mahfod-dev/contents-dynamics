import customFetch from './customFetch';
import { Params, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export const actionRegister = async ({ request }: { request: Request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);

	try {
		await customFetch.post('/auth/register', data);
		toast.success('Registration successful');
		return redirect('/login');
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		toast.error(error?.response?.data?.msg);
		return error;
	}
};

export const actionLogin = async ({ request }: { request: Request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		await customFetch.post('/auth/login', data);
		toast.success('Login successful');
		return redirect('/dashboard');
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		toast.error(error?.response?.data?.msg);
		return error;
	}
};

export const actionAddContent = async ({ request }: { request: Request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);

	try {
		const response = await customFetch.post('/contents', data);

		const items = response.data.placeholder;

		if (!response.data) {
			toast.error('Content not added already exists');
		} else {
			toast.success(`${items} added  successfully`);
		}

		return redirect('/dashboard');
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		console.log(error);
		toast.error(error?.response?.data?.msg);
		return error;
	}
};

export const actionUpdateContent = async ({
	request,
	params,
}: {
	request: Request;
	params: Params;
}) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);

	try {
		await customFetch.patch(`/contents/${params.id}`, data);
		toast.success('Content updated successfully with id: ' + params.id);
		return redirect('/dashboard');
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		toast.error(error?.response?.data?.msg);
		return error;
	}
};

export const actionDeleteContent = async ({ params }: { params: Params }) => {
	try {
		await customFetch.delete(`/contents/${params.id}`);
		toast.success('Content deleted successfully with id: ' + params.id);
		return redirect('/dashboard');
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		toast.error(error?.response?.data?.msg);
		return error;
	}
};

export const actionLogout = async () => {
	try {
		await customFetch.post('/auth/logout');
		toast.success('Logout successful');
		return redirect('/login');
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		toast.error(error?.response?.data?.msg);
		return error;
	}
};
