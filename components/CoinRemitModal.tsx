import Close from '@/assets/icons/Close';
import { Input } from './Input';

interface CoinRemitType {
	closeModal: () => void;
}

const CoinRemitModal = ({ closeModal }: CoinRemitType) => {
	return (
		<div className=''>
			<header className='flex items-center justify-between border-b border-b-gray-200 p-3'>
				<h3 className='text-gray-900 font-bold'>
					Pls fill after funding any of the accounts
				</h3>

				<button
					onClick={closeModal}
					className='bg-gray-300 transition-colors hover:bg-gray-900 text-gray-600 hover:text-gray-100 p-1 rounded-md'>
					<Close />
				</button>
			</header>

			<form className='p-6 flex flex-col gap-5 justify-center'>
				<Input label='Pls input account you fund' type='number' />
				<Input label='Your Account' type='number' />
				<Input label='How much did you send?' type='number' />
				<Input type='file' label='Receipt' />
				{/* input: */}
				<div className='flex flex-col justify-center'>
					<button
						type='submit'
						className='bg-gray-900 py-2 px-10 text-gray-100 rounded'>
						Account Funded
					</button>
					<span className='text-xs text-center font-bold text-red-600 py-1 mt-2 bg-red-200'>
						Pls wait for 3min to allow us confirm your transfer.
					</span>
				</div>
			</form>
		</div>
	);
};
export default CoinRemitModal;
