import { FormRow } from '../components/ui';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, useNavigation } from 'react-router-dom';
import FormRowSelect from '../components/ui/FormRowSelect';

const AddContents = () => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';

	return (
		<Wrapper>
			<Form
				method='post'
				className='form'>
				<h4 className='form-title'>add dynamics contents</h4>
				<div className='form-center'>
					<FormRow
						type='text'
						name='title'
					/>
					<FormRow
						type='text'
						name='content'
					/>
					{/* <FormRow
						type='text'
						labelText='language'
						name='language'
						defaultValue={language.language}
					/> */}
					<FormRowSelect
						name='language'
						labelText='language'
						list={['English', 'Spanish', 'French']}
						defaultValue='French'
					/>

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

export default AddContents;
