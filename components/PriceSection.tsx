export const PriceSection = () => {
	return (
		// bg-white backdrop-filter bg-opacity-40 backdrop-blur-lg border border-gray-200 col-span-2 px-10 my-2 rounded-lg
		<div className='col-span-2 bg-gray-100 my-4 shadow-xl rounded-lg p-10 price-section-bg'>
			<ul className='flex flex-col gap-3'>
				<li className='flex items-center justify-between bg-gray-900 rounded-md py-4 px-6'>
					<div className='flex items-center gap-5'>
						<p>image</p>
						<div>
							<h4 className='font-bold text-lg leading-4'>Bitcoin</h4>
							<p>BTC</p>
						</div>
					</div>

					<p className='font-bold'>&#8358;630.00/USD</p>
				</li>
				<li className='flex items-center justify-between bg-gray-900 rounded-md py-4 px-6'>
					<div className='flex items-center gap-5'>
						<p>image</p>
						<div>
							<h4 className='font-bold text-lg leading-4'>Ethereum</h4>
							<p>ETH</p>
						</div>
					</div>

					<p className='font-bold'>&#8358;630.00/USD</p>
				</li>
				<li className='flex items-center justify-between bg-gray-900 rounded-md py-4 px-6'>
					<div className='flex items-center gap-5'>
						<p>image</p>
						<div>
							<h4 className='font-bold text-lg leading-4'>USDT</h4>
							<p>USDT-TRC2</p>
						</div>
					</div>

					<p className='font-bold'>&#8358;630.00/USD</p>
				</li>
			</ul>
		</div>
	);
};
