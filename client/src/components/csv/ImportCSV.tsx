import { ChangeEvent, useState, FormEvent } from 'react';
import customFetch from '../../utils/customFetch';
import { FormRow } from '../ui';

const ImportCSV = () => {
	const [file, setFile] = useState<File>();

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;
		const file: File = (target.files as FileList)[0];
		setFile(file);
	};

	const handleSubmit = async (
		event: FormEvent<HTMLImageElement | HTMLFormElement>
	) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('file', file as Blob);

		try {
			const reponse = await customFetch.post('/files/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			console.log(reponse.status, reponse.data);

			if (reponse.status === 200) {
				alert('File uploaded successfully');
			} else {
				alert('File upload failed');
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{ marginTop: '20px' }}>
			<FormRow
				name='file'
				type='file'
				labelText='import CSV file'
				accept='.csv'
				onChange={onChange}
			/>
			<div style={{ marginTop: '10px' }}>
				<button
					type='submit'
					className='btn btn-form'>
					Importer
				</button>
			</div>
		</form>
	);
};

export default ImportCSV;
