import links from '../../utils/links';
import { NavLink } from 'react-router-dom';
import { useDashboardStore } from '../../store/dashboardStore';

export const NavLinks = ({ isBigSidebar }: { isBigSidebar?: boolean }) => {
	const { toggleSidebar } = useDashboardStore();

	const showSidebar = () => {
		isBigSidebar ?? toggleSidebar();
	};

	return (
		<div className='nav-links'>
			{links.map((link) => {
				const { text, path, icon } = link;
				// admin user
				return (
					<NavLink
						to={path}
						key={text}
						onClick={showSidebar}
						className='nav-link'
						end>
						<span className='icon'>{icon}</span>
						{text}
					</NavLink>
				);
			})}
		</div>
	);
};
