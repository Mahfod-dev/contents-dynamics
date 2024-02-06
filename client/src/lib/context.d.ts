import { ContentData, ContentTypes } from './contents';

export interface AllContentsContextProps {
	data: ContentData;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	sortData: ContentTypes[];
	value: string;
	handleSort: (e: React.ChangeEvent<HTMLInputElement>) => void;
	clearData: () => void;
}
