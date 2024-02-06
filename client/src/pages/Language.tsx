import { useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ContentInfo';
import ContentInfo from '../components/contents/ContentInfo';
import { LuLanguages } from 'react-icons/lu';
import { LanguagesTypeAPI, LanguageAPI } from '../lib/languages';

const Language = () => {
	const data = useLoaderData() as LanguagesTypeAPI;

	console.log(data);

	const languages = data.languages;

	return (
		<Wrapper>
			<div className='content'>
				<div className='content-center'>
					{languages.map((language: LanguageAPI) => {
						return (
							<ContentInfo
								key={language.id}
								icon={<LuLanguages />}
								text={language.name}
							/>
						);
					})}
				</div>
			</div>
		</Wrapper>
	);
};
export default Language;
