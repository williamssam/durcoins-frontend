import Bank from '@/assets/icons/Bank';
import DashboardIcon from '@/assets/icons/DashboardIcon';
import Help from '@/assets/icons/Help';
import Logout from '@/assets/icons/Logout';
import Sell from '@/assets/icons/Sell';
import Transactions from '@/assets/icons/Transactions';
import Wallet from '@/assets/icons/Wallet';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DashboardHeader = () => {
	const dashboardNav = [
		{
			title: 'Trade',
			navs: [
				{
					id: 1,
					title: 'Sell/Buy',
					url: '/dashboard/sell',
					icon: <Sell />,
				},
				{
					id: 2,
					title: 'Transactions',
					url: '/dashboard/transactions',
					icon: <Transactions />,
				},
				{
					id: 3,
					title: 'Wallet',
					url: '/dashboard/wallet',
					icon: <Wallet />,
				},
			],
		},
		{
			title: 'Settings',
			navs: [
				{
					id: 1,
					title: 'Bank Details',
					url: '/dashboard/bank-details',
					icon: <Bank />,
				},
				{
					id: 3,
					title: 'Help',
					url: '/dashboard/help',
					icon: <Help />,
				},
			],
		},
	];
	const router = useRouter();
	return (
		<header className='col-span-1 m-2'>
			<div className='bg-black text-gray-100 h-full rounded-xl px-8 py-10 flex flex-col justify-between relative'>
				<h1 className='font-black tracking-wide text-2xl'>Dura-coins</h1>

				<nav className='flex flex-col gap-9'>
					<Link href='/dashboard'>
						<a
							className={`flex items-center gap-3 transition-all hover:text-gray-400 focus:outline-none ${
								router.pathname === '/dashboard'
									? 'bg-gray-200 rounded text-gray-900 text-base py-2 px-5 font-bold hover:text-gray-900'
									: 'px-1'
							}`}>
							<DashboardIcon />
							Dashboard
						</a>
					</Link>

					{dashboardNav?.map((dashboard, index) => (
						<div key={index}>
							<h4 className='uppercase text-xs font-bold tracking-widest text-gray-400'>
								{dashboard.title}
							</h4>
							<ul className='flex flex-col text-[15px] gap-5 pt-3'>
								{dashboard.navs?.map(({ id, title, icon, url }) => (
									// active styles:
									<li key={id}>
										<Link href={url}>
											<a
												className={`flex items-center gap-3 transition-all hover:text-gray-400 focus:outline-none ${
													router.pathname === url
														? 'bg-gray-200 rounded text-gray-900 text-base py-2 px-5 font-bold hover:text-gray-900'
														: 'px-1'
												}`}>
												{icon}
												{title}
											</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</nav>

				<a
					href='#'
					className='flex items-center gap-2 transition-colors text-[15px] text-gray-300 hover:text-gray-400 focus:outline-none'>
					<Logout />
					<span>Logout</span>
				</a>

				{/* <p className='absolute text-xs bottom-2 text-gray-600'>
					Design and built by <a href='#'>ghostdeveloper</a>
				</p> */}
			</div>
		</header>
	);
};
export default DashboardHeader;
