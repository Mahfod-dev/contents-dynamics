export interface ContentTypes {
	url: string;
	id: number;
	name: string;
	placeholder: string;
	default_locale_id: number;
	outdated: boolean;
	created_at: Date;
	updated_at: Date;
	variants: Variant[];
}

export interface ContentData {
	contents: ContentTypes[];
}

export interface Variant {
	url: string;
	id: number;
	content: string;
	locale_id: number;
	outdated: boolean;
	active: boolean;
	default: boolean;
	created_at: Date;
	updated_at: Date;
}
