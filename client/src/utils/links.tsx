import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';
import { LuLanguages } from 'react-icons/lu';

const links = [
	{ text: 'add contents', path: '.', icon: <FaWpforms /> },
	{ text: 'all contents', path: 'all-contents', icon: <MdQueryStats /> },
	{ text: 'languages', path: 'languages', icon: <LuLanguages /> },
	{ text: 'stats', path: 'stats', icon: <IoBarChartSharp /> },
	{ text: 'profile', path: 'profile', icon: <ImProfile /> },
	{ text: 'admin', path: 'admin', icon: <MdAdminPanelSettings /> },
];

export default links;
