export interface LanguagesTypeAPI {
	languages: Language[];
}

export interface LanguageAPI {
	url: string;
	id: number;
	locale: string;
	name: string;
	native_name: string;
	presentation_name: string;
	rtl: boolean;
	created_at: Date;
	updated_at: Date;
	default: boolean;
}
