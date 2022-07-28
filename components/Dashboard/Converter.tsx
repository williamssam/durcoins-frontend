import Swap from '@/assets/icons/Swap';

export const Converter = () => {
	return (
		<div className='mt-10 bg-gray-50 px-8 py-3 rounded-md relative overflow-hidden'>
			{/* <div className='absolute left-0 text-gray-200'>
				<Swap size={200} />
			</div> */}
			<h3 className='text-lg text-center font-bold text-gray-900'>
				Rate Converter
			</h3>
			<div className='flex items-center gap-5'>
				<div className='flex items-center rounded-md overflow-hidden bg-gray-400'>
					<p className='font-bold text-lg bg-gray-400 px-4 py-2'>BTC</p>
					<input
						type='number'
						name=''
						id=''
						className='px-4 py-3 border-0 text-lg focus:outline-none bg-gray-200'
					/>
				</div>
				<div className='text-gray-600'>
					<Swap size={20} />
				</div>
				<div className='flex items-center rounded-md overflow-hidden bg-gray-400'>
					<p className='font-bold text-lg bg-gray-400 px-4 py-3'>NGN</p>
					<input
						type='number'
						name=''
						id=''
						className='px-4 py-3 border-0 text-lg focus:outline-none bg-gray-200'
					/>
				</div>
			</div>
			<p className='pt-2 font-bold text-gray-900'>USD: $145.00</p>

			{/* <div>
				<p>NGN</p>
				<input type='text' name='' id='' />
			</div> */}
		</div>
	);
};
