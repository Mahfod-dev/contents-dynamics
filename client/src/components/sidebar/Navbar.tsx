import Wrapper from '../../assets/wrappers/Navbar';
import { FaAlignLeft } from 'react-icons/fa';
import { Logo } from '../ui';
import { ThemeToggle } from '.';
import { useDashboardStore } from '../../store/dashboardStore';
import LogoutContainer from '../auth/LogoutContainer';

export const Navbar = () => {
	const { toggleSidebar } = useDashboardStore((state) => state);

	return (
		<Wrapper>
			<div className='nav-center'>
				<button
					type='button'
					className='toggle-btn'
					onClick={toggleSidebar}>
					<FaAlignLeft />
				</button>
				<div>
					<Logo />
					<h4 className='logo-text'>dashboard</h4>
				</div>
				<div className='btn-container'>
					<div className='btn-container'>
						<ThemeToggle />
						<LogoutContainer />
					</div>
				</div>
			</div>
		</Wrapper>
	);
};
