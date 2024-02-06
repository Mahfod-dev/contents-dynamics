import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { Params } from 'react-router-dom';

const actionDeleteContent = async ({ params }: { params: Params }) => {
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

export default actionDeleteContent;
