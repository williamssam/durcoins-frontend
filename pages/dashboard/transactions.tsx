import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import Head from 'next/head';
import { ReactElement } from 'react';

const Transactions = () => {
	return (
		<>
			<Head>
				<title>Transactions - Dura-coins</title>
			</Head>
			<section className='mt-8'>
				<h3 className='font-bold text-3xl'>Transactions</h3>

				{/* summary */}
				<div className='grid grid-cols-3 gap-6 mt-5'>
					<div className='py-5 px-8 bg-red-50 rounded-md flex items-center justify-between'>
						<div>
							<p>image</p>
							<p className='font-bold uppercase text-gray-600'>Total runs</p>
						</div>
						<p className='font-black text-4xl'>100</p>
					</div>
					<div className='py-5 px-8 bg-blue-50 rounded-md flex items-center justify-between'>
						<div>
							<p>image</p>
							<p className='font-bold uppercase text-gray-600'>My bag</p>
						</div>
						<p className='font-black text-4xl'>100</p>
					</div>
					<div className='py-5 px-8 bg-green-50 rounded-md flex items-center justify-between'>
						<div>
							<p>image</p>
							<p className='font-bold uppercase text-gray-600'>Lump</p>
						</div>
						<p className='font-black text-4xl'>100</p>
					</div>
				</div>
			</section>
		</>
	);
};

Transactions.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>;
};

export default Transactions;
