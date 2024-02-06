import { create } from 'zustand';
import { DashboardStore, ThemeStore, LogoutStore } from './type.store';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

export const useDashboardStore = create<DashboardStore>()((set) => ({
	count: 0,
	isSidebarOpen: false,
	toggleSidebar: () =>
		set((state) => ({
			isSidebarOpen: !state.isSidebarOpen,
		})),
}));

export const useThemeStore = create<ThemeStore>()((set) => ({
	isDarkMode: false,

	toggleTheme: () =>
		set((state) => ({
			isDarkMode: !state.isDarkMode,
		})),
}));

export const userLogout = create<LogoutStore>()((set) => ({
	isLogout: false,
	user: { name: 'John', avatar: 'https://i.pravatar.cc/150?img=3' },
	logoutUser: async () => {
		try {
			const response = await customFetch('/auth/logout', {
				method: 'delete',
			});
			console.log(response);
			if (response.status === 200) {
				set((state) => ({
					isLogout: !state.isLogout,
				}));
				toast.success('Logout successful');
				return redirect('/login');
			}
		} catch (error) {
			console.error(error);
		}
	},
}));
