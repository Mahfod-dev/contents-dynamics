import Wrapper from '../../assets/wrappers/ContentInfo';

type ContentInfoProps = {
	icon: React.ReactNode;
	text: number | string;
};

const ContentInfo = ({ icon, text }: ContentInfoProps) => {
	return (
		<Wrapper>
			<span className='job-icon'>{icon}</span>
			<span className='job-text'>{text}</span>
		</Wrapper>
	);
};
export default ContentInfo;
