import Bag from '@/assets/icons/Bag'
import Runs from '@/assets/icons/Runs'
import DashboardLayout from '@/components/Dashboard/DashboardLayout'
import { DashboardTitle } from '@/components/Dashboard/DashboardTitle'
import Drawer from '@/components/Dashboard/Drawer'
import { Select } from '@/components/Select'
import { filter, people } from '@/data/options'
import btcLogo from '@/public/btc-logo.png'
import { StatusObjectType } from 'models/@types'
import Head from 'next/head'
import Image from 'next/image'
import { ReactElement, useState } from 'react'

const Transactions = () => {
	const [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	const histories = [
		{
			id: 1,
			name: 'Bitcoin',
			symbol: 'BTC',
			logo: btcLogo,
			amountInDollar: '222.92',
			amountInNaira: '125613.68',
			status: 'approved',
		},
		{
			id: 2,
			name: 'Bitcoin',
			symbol: 'BTC',
			logo: btcLogo,
			amountInDollar: '222.92',
			amountInNaira: '125613.68',
			status: 'pending',
		},
		{
			id: 3,
			name: 'Bitcoin',
			symbol: 'BTC',
			logo: btcLogo,
			amountInDollar: '222.92',
			amountInNaira: '125613.68',
			status: 'pool',
		},
	]

	const statusStyles: StatusObjectType = {
		approved: 'bg-green-200 text-green-600',
		pending: 'bg-yellow-200 text-yellow-600',
		pool: 'bg-purple-200 text-purple-6000',
	}

	return (
		<>
			<Head>
				<title>Transactions - DuraCoins</title>
			</Head>
			<section className='mt-8 text-gray-900'>
				<DashboardTitle title='Transactions' />
				{/* summary */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 mt-6 md:mt-10 text-gray-100'>
					<div className='py-5 px-8 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-md flex items-center justify-between transition-all hover:shadow-duro-coins hover:md:scale-105'>
						<div className='text-gray-100'>
							<Runs size={30} />
							<p className='font-bold uppercase '>Total runs</p>
						</div>
						<p className='font-black text-3xl md:text-4xl'>100</p>
					</div>
					<div className='py-5 px-8 bg-gradient-to-br from-sky-500 to-indigo-500 rounded-md flex items-center justify-between transition-all hover:shadow-duro-coins hover:md:scale-105'>
						<div className='text-gray-100'>
							<Bag size={30} />
							<p className='font-bold uppercase text-sm'>My bag</p>
						</div>
						<p className='font-black text-3xl md:text-4xl'>100,000,000</p>
					</div>
					<div className='py-5 px-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-md flex items-center justify-between transition-all hover:shadow-duro-coins hover:md:scale-105'>
						<div className='text-gray-100'>
							<p>image</p>
							<p className='font-bold uppercase'>My bag</p>
						</div>
						<p className='font-black text-3xl md:text-4xl'>100,000,000</p>
					</div>
				</div>

				{/* table */}
				<section className='mt-10'>
					<header className='flex items-center gap-10'>
						<div className='flex flex-col md:flex-row items-center md:gap-3'>
							<span className='text-sm'>Filter by Coin</span>
							<Select options={people} />
						</div>

						<div className='flex flex-col md:flex-row items-center md:gap-3'>
							<p className='text-sm'>Filter by Type</p>
							<Select options={filter} />
						</div>
					</header>

					<div className='flex flex-col gap-2 my-5'>
						{histories?.map(({ status, id }) => (
							<button
								key={id}
								onClick={openModal}
								className='md:flex grid gap-3 md:items-center md:justify-between bg-gray-50 py-3 px-4 transition-all hover:bg-stone-50 active:scale-100'>
								<div className='flex items-center gap-4'>
									<Image
										src={btcLogo}
										alt='Bitcoin logo'
										width={40}
										height={40}
									/>
									<div className='flex flex-col items-start'>
										<p className='text-xl leading-4 font-bold'>
											{' '}
											0.00364285 BTC
										</p>
										<p className='text-sm'>18/10/2021 11:15</p>
									</div>
								</div>

								<div className='ml-auto text-right flex items-center justify-between w-48 md:w-52'>
									<div>
										<p className='font-black text-xl leading-4'>$222.92</p>
										<span className='font-bold text-gray-700'>₦125,613.68</span>
									</div>
									<p
										className={`uppercase text-xs font-bold tracking-wide rounded ${
											statusStyles[status] ?? null
										} px-3 py-1`}>
										{status}
									</p>
								</div>
							</button>
						))}
					</div>
				</section>
			</section>

			<Drawer isOpen={isOpen} closeModal={closeModal} />
		</>
	)
}

// Layout at page leve i.e shouw this "layout" on this page
Transactions.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>
}

export default Transactions
