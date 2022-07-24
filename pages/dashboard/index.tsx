import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import Head from 'next/head';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';

const Dashboard: NextPageWithLayout = () => {
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
					<h3 className='font-bold text-2xl'>
						What would you love to trade today? 🤔
					</h3>

					<div className='flex gap-10 pt-8'>
						<div className='bg-gray-600 h-20'>
							<p>Image</p>
							<p>Crypto</p>
						</div>
						<div>
							<p>Image</p>
							<p>Giftcard</p>
						</div>
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
