import Close from '@/assets/icons/Close';
import { banks } from '@/data/options';
import { Input } from './Input';
import { Select } from './Select';

interface AddBankType {
	closeModal: () => void;
}

export const AddBankModal = ({ closeModal }: AddBankType) => {
	return (
		<>
			<header className='flex items-center justify-between border-b border-b-gray-200 p-3'>
				<h3 className='text-lg leading-6 text-gray-900 font-bold'>
					Add Bank Details
				</h3>

				<button
					onClick={closeModal}
					className='bg-gray-300 transition-colors hover:bg-gray-900 text-gray-600 hover:text-gray-100 p-1 rounded-md'>
					<Close />
				</button>
			</header>
			<div className='mt-2 flex flex-col gap-6 p-6'>
				<Input type='text' label='Account Name' />
				<Input type='number' label='Account Number' />
				<Select options={banks} />
			</div>
			<div className='mt-4 px-6 pb-6'>
				<button
					type='button'
					className='inline-flex justify-center  border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium text-gray-900 transition-all hover:bg-gray-900 hover:text-gray-100 focus:outline-none'
					onClick={closeModal}>
					Add
				</button>
			</div>
		</>
	);
};
