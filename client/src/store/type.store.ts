export type DashboardStore = {
	isSidebarOpen: boolean;
	toggleSidebar: () => void;
};

export type ThemeStore = {
	isDarkMode: boolean;
	toggleTheme: () => void;
};

export type LogoutStore = {
	user: { name: string; avatar: string };
	isLogout: boolean;
	logoutUser: () => void;
};
