import { Logo, FormRow } from '../components/ui';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Form, Link, useNavigation } from 'react-router-dom';

const Register = () => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';
	return (
		<Wrapper>
			<Form
				className='form'
				method='post'>
				<Logo />
				<h4>Register</h4>
				<FormRow
					type='text'
					name='name'
				/>
				<FormRow
					type='text'
					name='lastName'
					labelText='last name'
				/>
				<FormRow
					type='text'
					name='location'
				/>
				<FormRow
					type='email'
					name='email'
				/>

				<FormRow
					type='password'
					name='password'
				/>

				<button
					type='submit'
					className='btn btn-block'
					disabled={isSubmitting}>
					{isSubmitting ? 'submitting...' : 'submit'}
				</button>
				<p>
					Already a member?
					<Link
						to='/login'
						className='member-btn'>
						Login
					</Link>
				</p>
			</Form>
		</Wrapper>
	);
};
export default Register;
