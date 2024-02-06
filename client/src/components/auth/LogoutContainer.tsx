import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from '../../assets/wrappers/LogoutContainer';
import { userLogout } from '../../store/dashboardStore';

const LogoutContainer = () => {
	const { user, logoutUser, isLogout } = userLogout((state) => state);

	return (
		<Wrapper>
			<button
				type='button'
				className='btn logout-btn'
				onClick={() => userLogout.setState({ isLogout: !isLogout })}>
				{user.avatar ? (
					<img
						src={user.avatar}
						alt='avatar'
						className='img'
					/>
				) : (
					<FaUserCircle />
				)}

				{user?.name}
				<FaCaretDown />
			</button>
			<div className={isLogout ? 'dropdown show-dropdown' : 'dropdown'}>
				<button
					type='button'
					className='dropdown-btn'
					onClick={logoutUser}>
					logout
				</button>
			</div>
		</Wrapper>
	);
};
export default LogoutContainer;
