import { createContext, useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import { SearchContainer, ContentsContainer } from '../components/contents';

import { ContentData, ContentTypes } from '../lib/contents';

export const AllContentsContext = createContext({});

const AllDynamicsContents = () => {
	const data = useLoaderData() as ContentData;

	const [sortData, setSortData] = useState<ContentTypes[]>([]);
	const [value, setValue] = useState('');

	const handleSort = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setValue(value);
	};

	const clearData = () => {
		setSortData(data.contents);
		setValue('');
	};

	useEffect(() => {
		if (value === '') {
			setSortData(data.contents);
		} else {
			const sortedItems = data.contents.filter((item: ContentTypes) => {
				return item.name.toLowerCase().includes(value.toLowerCase());
			});
			setSortData(sortedItems);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	return (
		<AllContentsContext.Provider
			value={{ data, setValue, sortData, value, handleSort, clearData }}>
			<SearchContainer />
			<ContentsContainer />
		</AllContentsContext.Provider>
	);
};

export default AllDynamicsContents;
