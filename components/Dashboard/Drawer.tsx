import Copy from '@/assets/icons/Copy';
import btcLogo from '@/public/btc-logo.png';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment } from 'react';

interface DrawerProps {
	isOpen: boolean;
	closeModal: () => void;
}

const Drawer = ({ isOpen, closeModal }: DrawerProps) => {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as='div' className='relative z-10' onClose={closeModal}>
				{/* backdrop */}
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<div className='fixed inset-0 bg-black bg-opacity-75' />
				</Transition.Child>

				<div className='fixed right-0 top-0 overflow-y-auto'>
					<div className='flex min-h-full items-center justify-center text-center'>
						<Transition.Child
							as={Fragment}
							enter='ease-in duration-200'
							enterFrom='opacity-0 translate-x-full'
							enterTo='opacity-100 translate-x-0'
							leave='ease-out duration-200'
							leaveFrom='opacity-100 translate-x-0'
							leaveTo='opacity-0 translate-x-full'>
							<Dialog.Panel className='w-[350px] flex flex-col justify-center overflow-hidden min-h-screen bg-gray-50 p-6 text-left align-middle shadow-2xl text-gray-900 transition-all'>
								<header className='flex flex-col items-center text-center'>
									<div>
										<div className='flex items-center justify-center gap-2'>
											<p className='text-[11px] uppercase tracking-wide'>
												Transaction ID:{' '}
												<span className='font-bold underline'>#7679174</span>
											</p>
											<button>
												<Copy />
											</button>
										</div>
										<h3 className='text-4xl font-black'>0.00364285</h3>
										<p className='text-sm'>$222.92 / ₦125,613.68</p>
									</div>
								</header>
								<ul className='flex flex-col gap-5 mt-6 break-words'>
									<li>
										<h3 className='text-xs uppercase font-bold text-gray-500'>
											Status
										</h3>
										<p>Approved</p>
									</li>
									<li>
										<h3 className='text-xs uppercase font-bold text-gray-500'>
											Sold
										</h3>
										<p className='flex items-center gap-1'>
											Bitcoin{' '}
											<Image
												src={btcLogo}
												alt='Bitcoin logo'
												width={20}
												height={20}
											/>
										</p>
									</li>
									<li>
										<h3 className='text-xs uppercase font-bold text-gray-500'>
											Sent
										</h3>
										<p className='w-full'>₦125,613.68</p>
									</li>
									<li>
										<h3 className='text-xs uppercase font-bold text-gray-500'>
											Transaction Date
										</h3>
										<p>June 24, 2021 at 9:20am</p>
									</li>
									<li>
										<h3 className='text-xs uppercase font-bold text-gray-500'>
											Hash
										</h3>
										<p>
											7c82c64175e26b9be164b9a912964d08d22c281b464fcfe9c67674538624cd9a{' '}
										</p>
									</li>
									<li>
										<h3 className='text-xs uppercase font-bold text-gray-500'>
											Bank Account
										</h3>
										<div>
											<p>PayCom(Opay)</p>
											<p>DURODOLA AGBOOLA MICHEAL</p>
											<p>8131200424</p>
										</div>
									</li>
									<li>
										<h3 className='text-xs uppercase font-bold text-gray-500'>
											Transaction log
										</h3>
										<div className='flex flex-col gap-1'>
											<div className='text-sm flex justify-between'>
												<p>Approved</p>
												<p>11/11/2011 - 11:15am</p>
											</div>
											<div className='text-sm flex justify-between'>
												<p>Pending</p>
												<p>11/11/2011 - 11:15am</p>
											</div>
											<div className='text-sm flex justify-between'>
												<p>Pool</p>
												<p>11/11/2011 - 11:15am</p>
											</div>
										</div>
									</li>
								</ul>
								<button
									type='button'
									className='inline-flex justify-center rounded-md border border-transparent bg-gray-300 px-4 py-2 mt-5 text-sm text-gray-900 font-bold hover:bg-gray-400 focus:outline-none'
									onClick={closeModal}>
									Got it, thanks!
								</button>
								{/* <div className='absolute bottom-0 right-0 -z-[1]'>
									<Image
										src={btcLogo}
										alt='Bitcoin logo'
										width={200}
										height={200}
									/>
								</div> */}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};
export default Drawer;
