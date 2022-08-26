import ArrowLeft from '@/assets/icons/ArrowLeft';
import Warning from '@/assets/icons/Warning';
import { Converter } from '@/components/Dashboard/Converter';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { Input } from '@/components/Input';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

const Buy = () => {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>Buy (Bitcoin) - Duro-coin</title>
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
						<h3 className='font-black text-3xl'>Buy Bitcoin</h3>

						<div className='mt-6'>
							<Input
								label='What amount do you have in mind (price)?'
								type='number'
							/>
						</div>

						<div className='bg-gray-100 mt-3 py-6 px-10 rounded-md shadow-duro-coins'>
							<p className=''>
								You are sending this to any of the account below
							</p>

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

						<Converter />
					</div>

					<div>
						<div className='bg-red-200 mt-10 py-5 px-8 rounded-md relative overflow-hidden'>
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
						<form className='flex flex-col gap-5 justify-center mt-10'>
							<h3>Pls fill after funding any of the accounts</h3>
							<Input label='Pls input account you fund' type='text' />
							<Input label='How much did you send?' type='number' />
							<Input type='file' label='Receipt' />
							{/* input: */}
							<div className='flex flex-col justify-center'>
								<button
									type='submit'
									className='bg-gray-900 py-2 px-10 text-gray-100 rounded'>
									Account Funded 🚀
								</button>
								<span className='text-xs text-center font-bold'>
									Pls fund account before clicking this button to avoid blocking
									account
								</span>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

Buy.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>;
};

export default Buy;
