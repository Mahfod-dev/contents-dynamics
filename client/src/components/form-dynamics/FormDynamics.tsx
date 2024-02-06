import { FormRow } from '../ui';

function FormDynamics() {
	return (
		<div className='flex justify-center items-center h-screen bg-gray-100'>
			<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg w-full'>
				<h4 className='text-3xl font-bold underline text-center mb-6'>
					Register
				</h4>

				<FormRow
					type='text'
					name='name'
					labelText='First Name'
				/>
				<FormRow
					type='text'
					name='lastName'
					labelText='Last Name'
				/>
				<FormRow
					type='text'
					name='location'
					labelText='Location'
				/>
				<FormRow
					type='email'
					name='email'
					labelText='Email'
				/>
				<FormRow
					type='password'
					name='password'
					labelText='Password'
				/>

				<div className='flex items-center justify-between mt-6'>
					<button
						type='submit'
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default FormDynamics;
