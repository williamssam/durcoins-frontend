import { BuySellModal } from '@/components/BuySellModal';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import Modal from '@/components/Modal';
import { coins } from '@/data/coins';
import btcLogo from '@/public/btc-logo.png';
import ethLogo from '@/public/eth-logo.png';
import Head from 'next/head';
import Image from 'next/image';
import { ReactElement, useState } from 'react';

const Sell = () => {
	let [isOpen, setIsOpen] = useState(false);
	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	return (
		<>
			<Head>
				<title>Sell - Dura-coins</title>
			</Head>

			<Modal closeModal={closeModal} isOpen={isOpen}>
				<BuySellModal />
			</Modal>

			<section className='pt-8'>
				<div>
					<h3 className='font-black text-5xl'>Sell/Buy Crypto & GiftCard</h3>
					<p className='pt-1'>
						What would you love to sell or buy, we buy and sell both crypto and
						giftcards?
					</p>
				</div>

				<div>
					<div className='mt-12'>
						<h4 className='uppercase tracking-wide font-bold'>Coins</h4>
						<div className='grid grid-cols-2 gap-6 mt-3'>
							{coins?.map(({ amount, id, image, name, symbol }) => (
								<button
									onClick={openModal}
									className='flex items-center justify-between bg-gray-50 p-4 rounded-md transition-all hover:bg-gray-300'
									key={id}>
									<div className='flex items-center gap-6'>
										<Image
											src={image}
											alt='Bitcoin logo'
											width={50}
											height={50}
										/>
										<div>
											<h5 className='font-bold text-xl'>{name}</h5>
											<p className='uppercase text-left text-gray-600'>
												{symbol}
											</p>
										</div>
									</div>
									<div className='text-right'>
										<h5 className='font-bold text-xl'>N{amount}.00/USD</h5>
										<p>limit: $200</p>
									</div>
								</button>
							))}
						</div>
					</div>

					<div className='mt-12'>
						<h4 className='uppercase tracking-wide font-bold'>Giftcard</h4>
						<div className='grid grid-cols-2 gap-6 mt-3'>
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
					</div>
				</div>

				<p className='mt-20 text-sm'>
					Can&apos;t find what you want to sell/buy?{' '}
					<a href='#' className='font-bold'>
						Contact us now!
					</a>
				</p>
			</section>
		</>
	);
};

Sell.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>;
};

export default Sell;
