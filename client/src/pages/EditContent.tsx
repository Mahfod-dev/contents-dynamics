import { FormRow } from '../components/ui';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, useNavigation } from 'react-router-dom';

const EditContent = () => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';
	return (
		<Wrapper>
			<Form
				method='post'
				className='form'>
				<h4 className='form-title'>edit job</h4>
				<div className='form-center'>
					<FormRow
						type='text'
						name='name'
						// defaultValue={content.title}
					/>
					{/* <FormRow
						type='text'
						name='content'
						defaultValue={content.content}
					/>
					<FormRow
						type='text'
						labelText='language location'
						name='language'
						defaultValue={content.language}
					/> */}

					<button
						type='submit'
						className='btn btn-block form-btn '
						disabled={isSubmitting}>
						{isSubmitting ? 'submitting...' : 'submit'}
					</button>
				</div>
			</Form>
		</Wrapper>
	);
};
export default EditContent;
