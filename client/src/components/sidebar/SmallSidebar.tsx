import Wrapper from '../../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';

import { Logo } from '../ui';
import { NavLink } from 'react-router-dom';
import links from '../../utils/links';
import { useDashboardStore } from '../../store/dashboardStore';

export const SmallSidebar = () => {
	const { isSidebarOpen, toggleSidebar } = useDashboardStore(
		(state) => state
	);

	return (
		<Wrapper>
			<div
				className={
					isSidebarOpen
						? 'sidebar-container show-sidebar'
						: 'sidebar-container'
				}>
				<div className='content'>
					<button
						type='button'
						className='close-btn'
						onClick={toggleSidebar}>
						<FaTimes />
					</button>
					<header>
						<Logo />
					</header>
					<div className='nav-links'>
						{links.map((link) => {
							const { text, path, icon } = link;

							return (
								<NavLink
									to={path}
									key={text}
									className='nav-link'
									onClick={toggleSidebar}
									// will discuss in a second
									end>
									<span className='icon'>{icon}</span>
									{text}
								</NavLink>
							);
						})}
					</div>
				</div>
			</div>
		</Wrapper>
	);
};
