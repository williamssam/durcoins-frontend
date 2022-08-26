import Bag from '@/assets/icons/Bag';
import Runs from '@/assets/icons/Runs';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import Drawer from '@/components/Dashboard/Drawer';
import { Select } from '@/components/Select';
import { filter, people } from '@/data/options';
import btcLogo from '@/public/btc-logo.png';
import Head from 'next/head';
import Image from 'next/image';
import { ReactElement, useState } from 'react';

const Transactions = () => {
	const [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	return (
		<>
			<Head>
				<title>Transactions - Dura-coins</title>
			</Head>
			<section className='mt-8 text-gray-900'>
				<h3 className='font-black text-5xl'>Transactions</h3>

				{/* summary */}
				<div className='grid grid-cols-3 gap-6 mt-10 text-gray-100'>
					<div className='py-5 px-8 bg-gray-900 rounded-md flex items-center justify-between transition-all hover:shadow-duro-coins hover:scale-105'>
						<div className='text-gray-300'>
							{/* <p>image</p> */}
							<Runs size={30} />
							<p className='font-bold uppercase '>Total runs</p>
						</div>
						<p className='font-black text-4xl'>100</p>
					</div>
					<div className='py-5 px-8 bg-gray-900 rounded-md flex items-center justify-between transition-all hover:shadow-duro-coins hover:scale-105'>
						<div className='text-gray-300'>
							<Bag size={30} />
							<p className='font-bold uppercase text-sm'>My bag</p>
						</div>
						<p className='font-black text-4xl'>100,000,000</p>
					</div>
					<div className='py-5 px-8 bg-gray-900 rounded-md flex items-center justify-between transition-all hover:shadow-duro-coins hover:scale-105'>
						<div>
							<p>image</p>
							<p className='font-bold uppercase text-gray-300'>My bag</p>
						</div>
						<p className='font-black text-4xl'>100,000,000</p>
					</div>
				</div>

				{/* table */}
				<section className='mt-10'>
					<header className='flex items-center gap-10'>
						<div className='flex items-center gap-3'>
							<span className='text-sm'>Filter by Coin</span>
							<Select options={people} />
						</div>

						<div className='flex items-center gap-3'>
							<p className='text-sm'>Filter by Type</p>
							<Select options={filter} />
						</div>

						{/* <button>
							<div className='flex items-center gap-2'>
								All
								<Filter />
							</div>
						</button> */}
					</header>

					<div className='flex flex-col gap-2 mt-5'>
						<button
							onClick={openModal}
							className='flex items-center justify-between bg-gray-50 py-3 px-4 transition-all hover:bg-stone-50 active:scale-100'>
							<div className='flex items-center gap-4'>
								<Image
									src={btcLogo}
									alt='Bitcoin logo'
									width={40}
									height={40}
								/>
								<div className='flex flex-col items-start'>
									<p className='text-xl leading-4 font-bold'> 0.00364285 BTC</p>
									<p className='text-sm'>18/10/2021 11:15</p>
								</div>
							</div>

							<div className='text-right flex items-center justify-between w-52'>
								<div>
									<p className='font-black text-xl leading-4'>$222.92</p>
									<span className='font-bold text-gray-700'>₦125,613.68</span>
								</div>
								<p className='uppercase text-xs font-bold tracking-wide rounded bg-green-200 text-green-600 px-3 py-1'>
									Approved
								</p>
							</div>
						</button>
						<button className='flex items-center justify-between bg-gray-50 py-3 px-4 transition-all hover:bg-stone-50 active:scale-100'>
							<div className='flex items-center gap-4'>
								<Image
									src={btcLogo}
									alt='Bitcoin logo'
									width={40}
									height={40}
								/>
								<div className='flex flex-col items-start'>
									<p className='text-xl leading-4 font-bold'> 0.00364285 BTC</p>
									<p className='text-sm'>18/10/2021 11:15</p>
								</div>
							</div>

							<div className='text-right flex items-center justify-between w-52'>
								<div>
									<p className='font-black text-xl leading-4'>$222.92</p>
									<span className='font-bold text-gray-700'>₦125,613.68</span>
								</div>
								<p className='uppercase text-xs font-bold tracking-wide rounded bg-yellow-200 text-yellow-600 px-3 py-1'>
									Pending
								</p>
							</div>
						</button>
						<button className='flex items-center justify-between bg-gray-50 py-3 px-4 transition-all hover:bg-stone-50 active:scale-100'>
							<div className='flex items-center gap-4'>
								<Image
									src={btcLogo}
									alt='Bitcoin logo'
									width={40}
									height={40}
								/>
								<div className='flex flex-col items-start'>
									<p className='text-xl leading-4 font-bold'> 0.00364285 BTC</p>
									<p className='text-sm'>18/10/2021 11:15</p>
								</div>
							</div>

							<div className='text-right flex items-center justify-between w-52'>
								<div>
									<p className='font-black text-xl leading-4'>$222.92</p>
									<span className='font-bold text-gray-700'>₦125,613.68</span>
								</div>
								<p className='uppercase text-xs font-bold tracking-wide rounded bg-purple-200 text-purple-600 px-3 py-1'>
									Pool
								</p>
							</div>
						</button>
					</div>
				</section>
			</section>

			<Drawer isOpen={isOpen} closeModal={closeModal} />
		</>
	);
};

Transactions.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>;
};

export default Transactions;
