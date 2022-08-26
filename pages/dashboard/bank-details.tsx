import Add from '@/assets/icons/Add';
import Bank from '@/assets/icons/Bank';
import Delete from '@/assets/icons/Delete';
import Edit from '@/assets/icons/Edit';
import { AddBankModal } from '@/components/AddBankModal';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import Modal from '@/components/Modal';
import { UpdateBankModal } from '@/components/UpdateBankModal';
import Head from 'next/head';
import { ReactElement, SetStateAction, useState } from 'react';

const BankDetails = () => {
	let [isOpen, setIsOpen] = useState(false);
	const [modalType, setModalType] = useState('');

	function closeModal() {
		setIsOpen(false);
	}

	function openModal(type: SetStateAction<string>) {
		setIsOpen(true);
		setModalType(type);
	}

	const changeModal = () => {
		if (modalType === 'add-account') {
			return <AddBankModal closeModal={closeModal} />;
		} else if (modalType === 'edit-account') {
			return <UpdateBankModal closeModal={closeModal} />;
		}
	};

	return (
		<>
			<Head>
				<title>Bank Details - Dura-coins</title>
			</Head>
			<Modal closeModal={closeModal} isOpen={isOpen}>
				{/* <UpdateBankModal closeModal={closeModal} /> */}
				{changeModal()}
			</Modal>

			<section className='pt-8'>
				<header className='flex items-center gap-10'>
					<h3 className='font-black text-5xl'>Bank Details</h3>

					<button
						onClick={() => openModal('add-account')}
						className='py-1 pl-2 pr-4 bg-black rounded text-gray-100 text-sm flex items-center gap-2'>
						<Add /> Add Account
					</button>
				</header>

				<div className='mt-12 grid grid-cols-3 gap-5'>
					<div className='flex items-start justify-between bg-gray-50 px-8 py-6 rounded-md relative overflow-hidden'>
						<div className='absolute -left-8 bottom-0 text-gray-300 text-opacity-20'>
							<Bank size={200} />
						</div>

						<div className='z-50'>
							<button
								type='button'
								className='text-sm font-bold text-purple-400 bg-purple-100 py-1 px-2 rounded transition-colors hover:bg-purple-200'>
								Make default
							</button>

							<div className='text-gray-500 flex flex-col items-start gap-1 mt-3'>
								<button
									onClick={() => openModal('edit-account')}
									className='p-2 rounded-full transition-all hover:bg-blue-200 hover:text-blue-500'>
									<Edit />
								</button>
								<button className='p-2 rounded-full transition-all hover:bg-red-200 hover:text-red-500'>
									<Delete />
								</button>
							</div>
						</div>

						<ul className='text-right flex flex-col gap-2'>
							<li>
								<p className='uppercase text-xs tracking-wider'>Account name</p>
								<p className='text-lg font-bold'>Williams Samuel</p>
							</li>
							<li>
								<p className='uppercase text-xs tracking-wider'>
									Account number
								</p>
								<p className='text-lg font-bold'>0123456789</p>
							</li>
							<li>
								<p className='uppercase text-xs tracking-wider'>Bank Name</p>
								<p className='text-lg font-bold'>United Bank of Africa</p>
							</li>
						</ul>
					</div>
					<div className='flex items-start justify-between bg-gray-900 text-gray-100 px-8 py-6 rounded-md relative overflow-hidden'>
						<div className='absolute -left-8 bottom-0 text-gray-300 text-opacity-20'>
							<Bank size={200} />
						</div>

						<div className='z-50'>
							<button
								type='button'
								className='text-sm font-bold text-green-400 bg-green-100 uppercase py-1 px-2 rounded transition-colors'>
								Default
							</button>

							<div className='text-gray-500 flex flex-col items-start gap-1 mt-3'>
								<button className='p-2 rounded-full transition-all hover:bg-blue-200 hover:text-blue-500'>
									<Edit />
								</button>
								<button className='p-2 rounded-full transition-all hover:bg-red-200 hover:text-red-500'>
									<Delete />
								</button>
							</div>
						</div>

						<ul className='text-right flex flex-col gap-2'>
							<li>
								<p className='uppercase text-xs tracking-wider'>Account name</p>
								<p className='text-lg font-bold'>Williams Samuel</p>
							</li>
							<li>
								<p className='uppercase text-xs tracking-wider'>
									Account number
								</p>
								<p className='text-lg font-bold'>0123456789</p>
							</li>
							<li>
								<p className='uppercase text-xs tracking-wider'>Bank Name</p>
								<p className='text-lg font-bold'>United Bank of Africa</p>
							</li>
							{/* <li>
								<p className='uppercase text-xs tracking-wider'	>Account Type</p>
								<p className='text-xl font-bold'>Savings</p>
							</li> */}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

BankDetails.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>;
};

export default BankDetails;
