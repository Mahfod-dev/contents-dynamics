import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Form, Link } from 'react-router-dom';
import ContentInfo from './ContentInfo';
import Wrapper from '../../assets/wrappers/Content';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

day.extend(advancedFormat);

type ContentProps = {
	title: string;
	content: string;
	language: number | string;
	id: number;
	createdAt?: Date;
};

const Content = ({ title, content, language, id }: ContentProps) => {
	// const date = day(createdAt).format('MMM Do, YYYY');

	switch (language) {
		case 1176:
			language = 'English';
			break;
		case 2:
			language = 'Spanish';
			break;
		case 16:
			language = 'French';
			break;
		default:
			language = 'Unknown';
			break;
	}

	return (
		<Wrapper>
			<header></header>
			<div className='content'>
				<div className='content-center'>
					<ContentInfo
						icon={<FaLocationArrow />}
						text={title}
					/>
					<ContentInfo
						icon={<FaCalendarAlt />}
						text={content}
					/>
					<ContentInfo
						icon={<FaBriefcase />}
						text={language}
					/>
				</div>

				<footer className='actions'>
					<Link
						to={`../edit-content/${id}`}
						className='btn edit-btn'>
						Edit
					</Link>

					<Form
						method='post'
						action={`../delete-content/${id}`}>
						<button
							type='submit'
							className='btn delete-btn'>
							Delete
						</button>
					</Form>
				</footer>
			</div>
		</Wrapper>
	);
};
export default Content;
