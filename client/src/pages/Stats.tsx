import { ChartsContainer, StatsContainer } from '../components/charts';
// import customFetch from '../utils/customFetch';
// import { useLoaderData } from 'react-router-dom';
// export const loader = async () => {
// 	try {
// 		const response = await customFetch.get('/jobs/stats');
// 		return response.data;
// 	} catch (error) {
// 		return error;
// 	}
// };

const Stats = () => {
	const monthlyApplications = [
		{
			month: 'Jan',
			applications: 10,
		},
		{
			month: 'Feb',
			applications: 20,
		},
		{
			month: 'Mar',
			applications: 30,
		},
		{
			month: 'Apr',
			applications: 40,
		},
		{
			month: 'May',
			applications: 50,
		},
		{
			month: 'Jun',
			applications: 60,
		},
		{
			month: 'Jul',
			applications: 70,
		},
		{
			month: 'Aug',
			applications: 80,
		},
		{
			month: 'Sep',
			applications: 90,
		},
		{
			month: 'Oct',
			applications: 100,
		},
		{
			month: 'Nov',
			applications: 110,
		},
		{
			month: 'Dec',
			applications: 120,
		},
	];

	const defaultStats = {
		contents: 20,
		title: 10,
		balise: 5,
	};

	return (
		<>
			<StatsContainer defaultStats={defaultStats} />
			{monthlyApplications?.length > 0 && (
				<ChartsContainer data={monthlyApplications} />
			)}
		</>
	);
};
export default Stats;
