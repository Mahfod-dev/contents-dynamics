import { Outlet } from 'react-router-dom';

import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, BigSidebar, SmallSidebar } from '../components/sidebar';

const Dashboard = () => {
	// const logoutUser = async () => {
	// 	console.log('logout user');
	// };
	return (
		<Wrapper>
			<main className='dashboard'>
				<SmallSidebar />
				<BigSidebar />
				<div>
					<Navbar />
					<div className='dashboard-page'>
						<Outlet />
					</div>
				</div>
			</main>
		</Wrapper>
	);
};

export default Dashboard;
