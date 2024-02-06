import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import Wrapper from '../../assets/wrappers/StatsContainer';
import { StatItem } from '../stats';
const StatsContainer = ({ defaultStats }) => {
	const stats = [
		{
			title: 'contents created',
			count: defaultStats?.content || 0,
			icon: <FaSuitcaseRolling />,
			color: '#f59e0b',
			bcg: '#fef3c7',
		},
		{
			title: 'posted contents',
			count: defaultStats?.title || 0,
			icon: <FaCalendarCheck />,
			color: '#647acb',
			bcg: '#e0e8f9',
		},
		{
			title: 'balise created',
			count: defaultStats?.balise || 0,
			icon: <FaBug />,
			color: '#d66a6a',
			bcg: '#ffeeee',
		},
	];
	return (
		<Wrapper>
			{stats.map((item) => {
				return (
					<StatItem
						key={item.title}
						{...item}
					/>
				);
			})}
		</Wrapper>
	);
};
export default StatsContainer;
