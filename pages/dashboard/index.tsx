import Check from '@/assets/icons/Check';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { RadioGroup } from '@headlessui/react';
import Head from 'next/head';
import { ReactElement, useState } from 'react';
import { NextPageWithLayout } from '../_app';

const Dashboard: NextPageWithLayout = () => {
	const plans = ['Crypto', 'GiftCards'];
	const [selected, setSelected] = useState('');
	return (
		<>
			<Head>
				<title>Dashboard - Dura-coins</title>
			</Head>
			<section className='pt-12'>
				<header>
					<p className='uppercase tracking-wider'>Welcome Back 🎉</p>
					<h2 className='text-5xl font-black'>Good Afternoon, Samuel</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
						nisi!
					</p>
				</header>

				<div className='flex flex-col items-center justify-center pt-20'>
					<h3 className='font-bold text-xl'>
						What would you love to trade today? 🤔
					</h3>

					<div className='flex gap-10 pt-8'>
						{/* <div className='bg-gray-400 h-60 w-60 rounded-md flex flex-col justify-center items-center'>
							<p>Image</p>
							<p className='uppercase tracking-wider text-2xl font-black'>
								Crypto
							</p>
						</div>
						<div className='bg-gray-400 h-60 w-60 rounded-md flex flex-col justify-center items-center'>
							<p>Image</p>
							<p className=''>
								Giftcard
							</p>
						</div> */}
						<RadioGroup value={selected} onChange={setSelected}>
							<div className='flex gap-10'>
								{plans.map((plan, index) => (
									<RadioGroup.Option
										key={index}
										value={plan}
										className={({ active, checked }) =>
											`${active ? 'ring-4 ring-gray-500' : ''}
                  ${checked ? 'bg-gray-900 text-white' : 'bg-gray-400'}
                    relative cursor-pointer h-64  w-72 rounded-md flex flex-col justify-center items-center shadow-duro-coins transition-all focus:outline-none`
										}>
										{({ active, checked }) => (
											<>
												<div className='text-sm'>
													<span>image</span>

													<RadioGroup.Label
														as='p'
														className={`uppercase tracking-wider text-3xl font-black ${
															checked ? 'text-white' : 'text-gray-900'
														}`}>
														{plan}
													</RadioGroup.Label>
													{/* <RadioGroup.Description
																as='span'
																className={`inline ${
																	checked ? 'text-sky-100' : 'text-gray-500'
																}`}>
															</RadioGroup.Description> */}
													{checked && (
														<div className='absolute bottom-2 right-2 text-white'>
															<Check size={36} />
														</div>
													)}
												</div>
											</>
										)}
									</RadioGroup.Option>
								))}
							</div>
						</RadioGroup>
					</div>
				</div>
			</section>
		</>
	);
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
