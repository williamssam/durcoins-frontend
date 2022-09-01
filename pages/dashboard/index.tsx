import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { DashboardTitle } from '@/components/Dashboard/DashboardTitle';
import Head from 'next/head';
import { ReactElement, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { NextPageWithLayout } from '../_app';

const Dashboard: NextPageWithLayout = () => {
	const plans = ['Crypto', 'GiftCards'];
	const [selected, setSelected] = useState('');
	return (
		<>
			<Head>
				<title>Dashboard - Dura-coins</title>
			</Head>
			<section className='pt-12 px-2 md:px-0'>
				<DashboardTitle
					upperSubtitle='Welcome Back 🎉'
					subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
						nisi!'
					title='Good Afternoon, Samuel'
				/>

				<div className='flex flex-col items-center justify-center pt-20'>
					<h3 className='font-bold text-xl'>
						What would you love to trade today? 🤔
					</h3>

					<div className='flex gap-10 pt-8'>
						{/* <RadioGroup value={selected} onChange={setSelected}>
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
						</RadioGroup> */}
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
