import ArrowLeft from '@/assets/icons/ArrowLeft';
import Warning from '@/assets/icons/Warning';
import CoinRemitModal from '@/components/CoinRemitModal';
import { BitcoinWidget } from '@/components/CoinWidgets';
import { Converter } from '@/components/Dashboard/Converter';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { DashboardTitle } from '@/components/Dashboard/DashboardTitle';
import { Input } from '@/components/Input';
import Modal from '@/components/Modal';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';

const Buy = () => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const closeModal = () => setIsOpen(false);
	const openModal = () => setIsOpen(true);
	return (
		<>
			<Head>
				<title>Buy (Bitcoin) - Duro-coin</title>
			</Head>

			<section className='px-2 md:px-0'>
				<button
					onClick={() => router.back()}
					className='flex items-center gap-1 text-gray-800 rounded-md mt-5 hover:bg-gray-900 hover:text-gray-100 p-1'>
					<ArrowLeft />
					Back
				</button>
				<div className='mt-5 grid-cols-1 md:grid-cols-2 gap-10'>
					<div>
						<DashboardTitle title='Buy Bitcoin' />

						<div className='mt-10'>
							<Input
								label='What amount do you have in mind (price)?'
								type='number'
							/>
						</div>

						{/* buy price */}
						<div className='bg-gray-100 mt-3 p-4 md:py-6 md:px-10 rounded-md shadow-duro-coins'>
							<p>You are sending this to any of the account below</p>

							<div className='font-bold text-2xl'>
								<span>$450</span>
								<span> / </span>
								<span>500,000 NGN</span>
							</div>

							<div className='grid grid-cols-2'>
								<ul className='flex flex-col gap-1 pt-10'>
									<li>
										<p className='uppercase text-xs tracking-wider'>
											Account name
										</p>
										<p className='text-lg font-bold'>Williams Samuel</p>
									</li>
									<li>
										<p className='uppercase text-xs tracking-wider'>
											Account number
										</p>
										<p className='text-lg font-bold'>0123456789</p>
									</li>
									<li>
										<p className='uppercase text-xs tracking-wider'>
											Bank Name
										</p>
										<p className='text-lg font-bold'>United Bank of Africa</p>
									</li>
								</ul>
								<ul className='flex flex-col gap-1 pt-10'>
									<li>
										<p className='uppercase text-xs tracking-wider'>
											Account name
										</p>
										<p className='text-lg font-bold'>Williams Samuel</p>
									</li>
									<li>
										<p className='uppercase text-xs tracking-wider'>
											Account number
										</p>
										<p className='text-lg font-bold'>0123456789</p>
									</li>
									<li>
										<p className='uppercase text-xs tracking-wider'>
											Bank Name
										</p>
										<p className='text-lg font-bold'>United Bank of Africa</p>
									</li>
								</ul>
							</div>
						</div>

						<button
							onClick={openModal}
							className='bg-gray-900 py-2 px-10 text-gray-100 rounded mt-5'>
							Account Credited! 🚀
						</button>

						<Converter />
					</div>

					<div>
						<div className='bg-red-200 my-10  py-5 px-8 rounded-md relative overflow-hidden'>
							<div className='absolute top-0 -left-10 text-red-100'>
								<Warning size={120} />
							</div>
							<div className='ml-10'>
								<p className='uppercase font-bold text-red-500'>Important</p>

								<ul className='list-disc ml-5 flex flex-col gap-4 mt-3 text-gray-700 text-sm'>
									<li>Send only naira to either of the bank accounts.</li>
									<li>
										When sending, use your name as remark, pls do not use coin,
										crypto etc
									</li>
									<li>
										Minimum BTC we pay out is $200 If you send less than $200
										worth of BTC, your deposits will be accumulated and paid
										once it reaches $200.
									</li>
								</ul>
							</div>
						</div>

						<BitcoinWidget />
					</div>
				</div>
			</section>

			<Modal closeModal={closeModal} isOpen={isOpen}>
				<CoinRemitModal closeModal={closeModal} />
			</Modal>
		</>
	);
};

Buy.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>;
};

export default Buy;
