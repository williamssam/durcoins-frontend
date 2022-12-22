import DashboardLayout from '@/components/Dashboard/DashboardLayout'
import { DashboardTitle } from '@/components/Dashboard/DashboardTitle'
import { coins } from '@/data/coins'
import Head from 'next/head'
import Image from 'next/image'
import { ReactElement } from 'react'

const TradeGiftCard = () => {
	// const [isOpen, setIsOpen] = useState(false)
	// const closeModal = () => setIsOpen(false)
	// const openModal = () => setIsOpen(true)
	return (
		<>
			<Head>
				<title>Sell - DuraCoins</title>
			</Head>

			{/* <Modal closeModal={closeModal} isOpen={isOpen}>
				<BuySellModal />
			</Modal> */}

			<section className='pt-8 px-2 md:px-0'>
				<DashboardTitle
					title='Trade GiftCard'
					subtitle='What giftcard(s) would you love to sell or buy?'
				/>

				<div>
					<div className='mt-12'>
						<h4 className='uppercase tracking-wide font-bold'>Coins</h4>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-3'>
							{coins?.map(({ amount, id, image, name, symbol }) => (
								<button
									// onClick={openModal}
									className='flex items-center justify-between bg-gray-50 px-2 py-4 md:p-4 rounded-md transition-all hover:shadow-duro-coins'
									key={id}>
									<div className='flex items-center gap-3 md:gap-6'>
										<Image
											src={image}
											alt='Bitcoin logo'
											width={50}
											height={50}
										/>
										<div>
											<h5 className='font-bold text-lg md:text-xl'>{name}</h5>
											<p className='uppercase text-left text-gray-600'>
												{symbol}
											</p>
										</div>
									</div>
									<div className='text-right'>
										<h5 className='font-bold text-lg md:text-xl'>
											N{amount}.00/USD
										</h5>
										<p>limit: $200</p>
									</div>
								</button>
							))}
						</div>
					</div>
					{/*
					<div className='mt-12'>
						<h4 className='uppercase tracking-wide font-bold'>Giftcard</h4>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-3'>
							<button className='flex items-center justify-between bg-gray-50 p-4 rounded-md transition-all hover:bg-gray-300'>
								<div className='flex items-center gap-6'>
									<Image
										src={btcLogo}
										alt='Bitcoin logo'
										width={50}
										height={50}
									/>
									<div>
										<h5 className='font-bold text-xl'>Bitcoin</h5>
										<p className='uppercase text-left text-gray-600'>BTC</p>
									</div>
								</div>
								<div className='text-right'>
									<h5 className='font-bold text-xl'>N649.00/USD</h5>
									<p>limit: $200</p>
								</div>
							</button>
							<button className='flex items-center justify-between bg-gray-50 p-4 rounded-md transition-all hover:bg-gray-300'>
								<div className='flex items-center gap-6'>
									<Image
										src={ethLogo}
										alt='Bitcoin logo'
										width={50}
										height={50}
									/>
									<div>
										<h5 className='font-bold text-xl'>Ethereium</h5>
										<p className='uppercase text-left text-gray-600'>ETH</p>
									</div>
								</div>
								<div className='text-right'>
									<h5 className='font-bold text-xl'>N649.00/USD</h5>
									<p>limit: $200</p>
								</div>
							</button>
						</div>
					</div> */}
				</div>

				<p className='mt-20 text-sm'>
					Can&apos;t find what you want to sell/buy?{' '}
					<a href='#' className='font-bold'>
						Contact us now!
					</a>
				</p>
			</section>
		</>
	)
}

TradeGiftCard.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>
}

export default TradeGiftCard
