import { Input } from '../Input';

export const Converter = () => {
	return (
		<div className='mt-10 bg-gray-50 px-8 py-5 rounded-md'>
			<h3 className='text-lg text-center uppercase tracking-wide font-bold text-gray-900'>
				Rate Converter
			</h3>

			<div className=''>
				<div className='mt-6 grid gap-10 grid-cols-2'>
					{/* <div className='flex items-center gap-3 overflow-hidden'> */}
					{/* </div> */}
					<Input type='number' label='BTC (Bitcoin)' />
					<Input type='number' label='USD (United State Dollar)' />
				</div>

				<div className='bg-gray-900 mt-5 py-3 text-gray-100 font-bold text-center'>
					<p className='font-boldcol-span-2'>
						USD: $145.00 / NGN120,000,000.00
					</p>
				</div>
			</div>

			{/* only show on home screen */}
			{/* <button>Sell/Buy</button> */}

			{/* <div>
				<p>NGN</p>
				<input type='text' name='' id='' />
			</div> */}
		</div>
	);
};
