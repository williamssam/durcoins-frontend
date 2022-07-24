import Notification from '@/assets/icons/Notification';
import DashboardHeader from './DashboardHeader';

interface DashboardLayoutProps {
	children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	return (
		<main className='grid grid-cols-5 min-h-screen'>
			<DashboardHeader />
			<div className='bg-gray-200 col-span-4 px-10 py-3'>
				<div className='grid grid-cols-2 items-center  bg-gray-50 py-2 px-10 rounded-md'>
					<p className='justify-self-end font-bold uppercase tracking-wider'>
						Duro-coins
					</p>

					<div className='flex items-center gap-4 ml-auto text-gray-400'>
						<button className='w-10 h-10 bg-blue-500 text-gray-100 font-black tracking-wider rounded-full grid place-items-center transition-all hover:bg-blue-600'>
							SA
						</button>

						<button>
							<Notification />
						</button>
					</div>
				</div>
				{children}
			</div>
		</main>
	);
};
export default DashboardLayout;
