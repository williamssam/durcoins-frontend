import ArrowLeft from '@/assets/icons/ArrowLeft';
import Warning from '@/assets/icons/Warning';
import { Converter } from '@/components/Dashboard/Converter';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import qrCode from '@/public/bitcoinaddress.svg';
import btcLogo from '@/public/btc-logo.png';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Coin = () => {
	const router = useRouter();
	const notify = () => {
		toast.success('🥳 Address Copied!!');
	};
	return (
		<>
			<Head>
				<title>Sell (Coin) - Duro-coin</title>
			</Head>
			<section>
				<button
					onClick={() => router.back()}
					className='flex items-center gap-1 text-gray-800 rounded-md mt-5 hover:bg-gray-900 hover:text-gray-100 p-1'>
					<ArrowLeft />
					Back
				</button>

				<div className='mt-10 grid grid-cols-2 gap-10'>
					<div>
						<div className='flex items-center gap-2'>
							<Image src={btcLogo} alt='Bitcoin logo' width={50} height={50} />
							<p className='text-lg'>
								<strong>Sell</strong> Bitcoin
							</p>
						</div>
						<div>
							<h3 className='font-black text-5xl mt-4'>&#8358;655.50/USD</h3>
							<p className='text-gray-600'>
								&#8358;14,845,914.765 / $22,648.23 / BTC
							</p>
						</div>
						<div className='bg-red-200 mt-10 py-5 px-8 rounded-md relative overflow-hidden'>
							<div className='absolute top-0 -left-10 text-red-100'>
								<Warning size={120} />
							</div>
							<div className='ml-10'>
								<p className='uppercase font-bold text-red-500'>Important</p>

								<ul className='list-disc ml-5 flex flex-col gap-4 mt-3 text-gray-700 text-sm'>
									<li>
										Send only BTC to this deposit address. Sending any other
										coin to this address will result in permanent loss of your
										deposit.
									</li>
									<li>
										Minimum BTC we pay out is $200 If you send less than $200
										worth of BTC, your deposits will be accumulated and paid
										once it reaches $200.
									</li>
								</ul>
							</div>
						</div>
						<Converter />
					</div>

					<div className='flex flex-col justify-between bg-gray-50 w-max rounded-md justify-self-center p-5 shadow-duro-coins'>
						<div className='mx-auto'>
							<p className='text-center text-gray-700 uppercase text-sm'>
								Scan to copy deposit address
							</p>
							<Image src={qrCode} alt='qr code' width={300} height={300} />
						</div>

						<p className='tracking-widest uppercase text-center text-gray-500 mt-3'>
							OR
						</p>

						<div className='mx-auto mt-8'>
							<p className='text-center text-gray-700 uppercase text-sm'>
								Copy deposit address
							</p>
							<p className='text-lg text-center text-blue-600 mt-3 font-bold'>
								1BWThfKLm83cVvY7oN76g5sj4cnh9qPY58
							</p>
							<button
								onClick={notify}
								className='bg-black mt-6 w-full p-2 text-lg rounded-md text-gray-100'>
								Copy BTC Address
							</button>
						</div>
					</div>
				</div>
			</section>

			<ToastContainer
				position='bottom-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				theme='dark'
			/>
		</>
	);
};

Coin.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>;
};

export default Coin;
