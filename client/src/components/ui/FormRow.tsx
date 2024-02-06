import React from 'react';

interface FormRowProps {
	type: string;
	name: string;
	labelText?: string;
	defaultValue?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const FormRow = ({
	type,
	name,
	labelText,
	defaultValue = '',
	onChange,
}: FormRowProps) => {
	return (
		<div className='form-row'>
			<label
				htmlFor={name}
				className='form-label'>
				{labelText || name}
			</label>
			<input
				type={type}
				id={name}
				name={name}
				className='form-input'
				defaultValue={defaultValue}
				required
				onChange={onChange}
			/>
		</div>
	);
};
