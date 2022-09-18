import Hamburger from '@/assets/icons/Hamburger';
import Notification from '@/assets/icons/Notification';
import { useState } from 'react';
import DashboardHeader from './DashboardHeader';

interface DashboardLayoutProps {
	children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	const [openNav, setOpenNav] = useState(false);

	const openDashboardMenu = () => setOpenNav(!openNav);

	return (
		<main className='grid grid-cols-5 min-h-screen'>
			<DashboardHeader
				openNav={openNav}
				openDashboardMenu={openDashboardMenu}
			/>
			<div className='bg-gray-200 col-span-full md:col-span-4 px-2 md:px-10 py-3'>
				<div className='flex justify-between md:grid md:grid-cols-2 items-center bg-white py-3 px-4 md:py-2 md:px-10 rounded-md shadow-duro-coins'>
					<p className='md:justify-self-end font-bold uppercase tracking-wider'>
						Duro-coins
					</p>

					<div className='hidden md:flex items-center gap-4 ml-auto text-gray-400'>
						<button className='w-10 h-10 bg-blue-500 text-gray-100 font-black tracking-wider rounded-full grid place-items-center transition-all hover:bg-blue-600'>
							SA
						</button>

						<button>
							<Notification />
						</button>
					</div>

					<button className='p-1 md:hidden' onClick={openDashboardMenu}>
						<Hamburger />
					</button>
				</div>
				{children}
			</div>
		</main>
	);
};
export default DashboardLayout;
