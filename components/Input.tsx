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
		<div>
			<label className='relative'>
				<input
					// {...rest}
					type={type}
					required
					autoComplete='false'
					className='py-1 w-full text-gray-900 border-b-2 border-b-gray-400 outline-none focus:border-gray-400 transition duration-200 peer valid:border-blue-600 bg-transparent'
				/>
				<span className='text-gray-400 absolute left-0 top-1/2 -translate-y-1/2 transition duration-200 peer-focus:text-gray-600 peer-focus:transform peer-focus:-translate-y-7 peer-focus:text-xs peer-valid:-translate-y-7 peer-valid:text-xs peer-valid:text-blue-600'>
					{label}
				</span>

				{type === 'password' && (
					<button
						type='button'
						onClick={() => setPasswordType(!passwordType)}
						className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-900 w-5 h-full focus:outline-none'>
						{passwordType ? <EyeOpen /> : <EyeClose />}
					</button>
				)}
			</label>
			{/* <span className='text-xs text-red-600 italic'>Error asshoel</span> */}
		</div>
	);
};
