import EyeClose from '@/assets/icons/EyeClose';
import EyeOpen from '@/assets/icons/EyeOpen';
import { useState } from 'react';

interface InputProps {
	type: string;
	label: string;
}

export const Input = ({ type, label }: InputProps) => {
	const [passwordType, setPasswordType] = useState(false);
	return (
		<label className='relative'>
			<input
				type={type}
				required
				autoComplete='false'
				className='py-[13px] px-5 w-full text-xl text-gray-200 bg-gray-900 border-2 border-gray-400 rounded-md outline-none focus:border-gray-400  transition duration-200 peer valid:border-blue-500'
			/>
			<span className='text-lg text-gray-400 absolute left-2 top-1/2 -translate-y-1/2 px-3 transition duration-200 peer-focus:text-gray-300 peer-focus:transform peer-focus:-translate-y-11 peer-focus:-translate-x-2 peer-focus:scale-75 peer-focus:bg-gray-900 peer-valid:-translate-y-11 peer-valid:bg-gray-900 peer-valid:scale-75 peer-valid:-translate-x-2 peer-valid:text-blue-500'>
				{label}
			</span>

			{type === 'password' && (
				<button
					type='button'
					onClick={() => setPasswordType(!passwordType)}
					className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-300 w-5 h-full focus:outline-none'>
					{passwordType ? <EyeOpen /> : <EyeClose />}
				</button>
			)}
		</label>
	);
};
