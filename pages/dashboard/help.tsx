import Facebook from '@/assets/icons/Facebook';
import Mail from '@/assets/icons/Mail';
import Phone from '@/assets/icons/Phone';
import Twitter from '@/assets/icons/Twitter';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import Head from 'next/head';
import { ReactElement } from 'react';

const Help = () => {
	return (
		<>
			<Head>
				<title>Help - Dura-coins</title>
			</Head>
			<section>
				<h2 className='text-5xl font-black mt-14'>Help Center</h2>
				<p className='pt-1 '>Hi, how can we help you?</p>

				<div className='mt-5'>
					<button className='text-sm font-bold bg-gray-800 text-gray-100 py-3 px-5 rounded-md transition-all hover:bg-gray-900'>
						Chat on Whatsapp
					</button>
				</div>
				{/* <p>All frequently asked questions are answered in the FAQ section</p> */}
				{/* faqs */}

				<div className='mt-10'>
					<p>You can also contact us with any of these details below:</p>
					<ul className='flex flex-col gap-5 mt-4'>
						<li className='flex items-center gap-5 text-gray-800'>
							<Mail />
							<span>michealdurodola@gmail.com</span>
						</li>
						<li className='flex items-center gap-5 text-gray-800'>
							<Phone />
							<span>+234 8123546987</span>
						</li>
						<li className='flex items-center gap-5 text-gray-800'>
							<Twitter />
							<span>@durocoins</span>
						</li>
						<li className='flex items-center gap-5 text-gray-800'>
							<Facebook />
							<span>Durocoins</span>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

Help.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>;
};

export default Help;
