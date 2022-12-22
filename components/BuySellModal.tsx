import Link from 'next/link'

export const BuySellModal = () => {
	return (
		<div className='p-6 text-center'>
			{/* <div className='border-b-2 border-b-red-500'> */}
			<h3 className='font-bold text-xl'>Do you want to buy or sell Bitcoin?</h3>
			<span>Please select one</span>
			{/* </div> */}

			<div className='flex flex-col mt-10 gap-5 font-bold text-lg'>
				<Link href='/dashboard/trade/coin'>
					<a className='flex items-center justify-center bg-gray-900 p-2 text-gray-100 rounded-md'>
						Sell
					</a>
				</Link>
				<Link href='/dashboard/trade/buy'>
					<a className='flex items-center justify-center bg-gray-900 p-2 text-gray-100 rounded-md'>
						Buy
					</a>
				</Link>
			</div>
		</div>
	)
}
