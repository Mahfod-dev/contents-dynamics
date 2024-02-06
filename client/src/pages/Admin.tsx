import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import { StatItem } from '../components/stats';

import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/StatsContainer';
import { toast } from 'react-toastify';
// export const loader = async () => {
// 	try {
// 		const response = await customFetch.get('/users/admin/app-stats');
// 		return response.data;
// 	} catch (error) {
// 		toast.error('You are not authorized to view this page');
// 		return redirect('/dashboard');
// 	}
// };

const Admin = () => {
	// const { users, jobs } = useLoaderData();

	const users = 10;
	const contents = 20;
	return (
		<Wrapper>
			<StatItem
				title='current users'
				count={users}
				color='#e9b949'
				bcg='#fcefc7'
				icon={<FaSuitcaseRolling />}
			/>
			<StatItem
				title='total contents'
				count={contents}
				color='#647acb'
				bcg='#e0e8f9'
				icon={<FaCalendarCheck />}
			/>
		</Wrapper>
	);
};
export default Admin;
