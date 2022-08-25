import Close from '@/assets/icons/Close';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Input } from './Input';

interface ModalProps {
	closeModal: () => void;
	isOpen: boolean;
	title: string;
}

const Modal = ({ closeModal, isOpen, title }: ModalProps) => {
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as='div' className='relative z-50' onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<div className='fixed inset-0 bg-black bg-opacity-80' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'>
								<Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-md bg-white text-left align-middle shadow-xl transition-all'>
									<header className='flex items-center justify-between border-b border-b-gray-200 p-3'>
										<h3 className='text-lg leading-6 text-gray-900 font-bold'>
											{title}
										</h3>

										<button
											onClick={closeModal}
											className='bg-gray-300 transition-colors hover:bg-gray-900 text-gray-600 hover:text-gray-100 p-1 rounded-md'>
											<Close />
										</button>
									</header>
									<div className='mt-2 flex flex-col gap-8 p-6'>
										<Input type='text' label='Account Name' />
										<Input type='number' label='Account Number' />

										{/* select field */}
										{/* <div className='flex flex-col gap-1'>
											<label htmlFor=''>Password</label>
											<input
												type='password'
												name=''
												id=''
												className='border-2 border-gray-500 rounded-md py-2 px-3 focus:outline-none focus:bg-gray-200'
											/>
										</div> */}
									</div>

									<div className='mt-4 px-6 pb-6'>
										<button
											type='button'
											className='inline-flex justify-center rounded-md border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium text-gray-900 transition-all hover:bg-gray-900 hover:text-gray-100 focus:outline-none'
											onClick={closeModal}>
											Update!
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};
export default Modal;
