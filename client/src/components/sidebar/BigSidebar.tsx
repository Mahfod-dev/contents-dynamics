import { NavLinks } from '.';
import { Logo } from '../ui';
import Wrapper from '../../assets/wrappers/BigSidebar';
import { useDashboardStore } from '../../store/dashboardStore';

export const BigSidebar = () => {
	const { isSidebarOpen } = useDashboardStore((state) => state);

	return (
		<Wrapper>
			<div
				className={
					isSidebarOpen
						? 'sidebar-container'
						: 'sidebar-container show-sidebar'
				}>
				<div className='content'>
					<header>
						<Logo />
					</header>
					<NavLinks isBigSidebar />
				</div>
			</div>
		</Wrapper>
	);
};
