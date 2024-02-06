import { useLayoutEffect } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Wrapper from '../../assets/wrappers/ThemeToggle';
import { useThemeStore } from '../../store/dashboardStore';

export const ThemeToggle = () => {
	const { isDarkMode, toggleTheme } = useThemeStore((state) => state);

	useLayoutEffect(() => {
		document.body.classList.toggle('dark-theme', isDarkMode);
	}, [isDarkMode]);

	return (
		<Wrapper onClick={toggleTheme}>
			{isDarkMode ? (
				<BsFillSunFill className='toggle-icon' />
			) : (
				<BsFillMoonFill className='toggle-icon' />
			)}
		</Wrapper>
	);
};
