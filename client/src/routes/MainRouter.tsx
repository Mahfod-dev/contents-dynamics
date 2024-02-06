import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	HomeLayout,
	Dashboard,
	Landing,
	Error,
	Register,
	Login,
	AllContents,
	EditContent,
	Admin,
	Profile,
	Stats,
	actionDeleteContent,
	Language,
} from '../pages';
import AddContents from '../pages/AddContents';
import {
	actionRegister,
	actionLogin,
	actionAddContent,
	actionUpdateContent,
} from '../utils/actionForm';
import { loaderContents, loaderLanguages } from '../utils/actionLoader';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: 'register',
				element: <Register />,
				action: actionRegister,
			},
			{
				path: 'login',
				element: <Login />,
				action: actionLogin,
			},

			{
				path: 'dashboard',
				element: <Dashboard />,
				children: [
					{
						index: true,
						element: <AddContents />,
						action: actionAddContent,
					},
					{
						path: 'all-contents',
						element: <AllContents />,
						loader: loaderContents,
					},
					{
						path: 'edit-content/:id',
						element: <EditContent />,
						action: actionUpdateContent,
					},
					{
						path: 'delete-content/:id',
						action: actionDeleteContent,
					},
					{
						path: 'languages',
						element: <Language />,
						loader: loaderLanguages,
					},

					{
						path: 'stats',
						element: <Stats />,
					},
					{
						path: 'profile',
						element: <Profile />,
					},
					{
						path: 'admin',
						element: <Admin />,
					},
				],
			},
		],
	},
]);

const Mainrouter = () => {
	return <RouterProvider router={router} />;
};

export default Mainrouter;
