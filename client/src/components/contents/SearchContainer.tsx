import { FormRow } from '../ui';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { Form } from 'react-router-dom';
import { useAllContents } from '../../utils/contextContents';

export const SearchContainer = () => {
	const { handleSort, clearData, value } = useAllContents();

	return (
		<Wrapper>
			<Form className='form'>
				<h5 className='form-title'>search form</h5>
				<div className='form-center'>
					{/* search position */}

					<FormRow
						type='search'
						name='search'
						defaultValue={value}
						onChange={handleSort}
					/>

					<button
						onClick={clearData}
						className='btn form-btn delete-btn'>
						Reset Search Values
					</button>
				</div>
			</Form>
		</Wrapper>
	);
};
