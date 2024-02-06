import { ContentTypes } from '../../lib/contents';
import Wrapper from '../../assets/wrappers/ContentContainer';

import { useAllContents } from '../../utils/contextContents';
import Content from './Content';

export const ContentsContainer = () => {
	const { sortData } = useAllContents();

	return (
		<Wrapper>
			<div className='jobs'>
				<h4>{sortData?.length} Contents found</h4>

				{sortData?.map((content: ContentTypes) => {
					return (
						<Content
							key={content.id}
							id={content.id}
							title={content.name}
							content={content.placeholder}
							language={content.default_locale_id}
							createdAt={content.created_at}
						/>
					);
				})}
			</div>
		</Wrapper>
	);
};
