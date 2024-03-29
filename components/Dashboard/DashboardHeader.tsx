import Bank from '@/assets/icons/Bank'
import Card from '@/assets/icons/Card'
import Close from '@/assets/icons/Close'
import DashboardIcon from '@/assets/icons/DashboardIcon'
import Help from '@/assets/icons/Help'
import Logout from '@/assets/icons/Logout'
import Sell from '@/assets/icons/Sell'
import Transactions from '@/assets/icons/Transactions'
import Wallet from '@/assets/icons/Wallet'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Logo } from '../Logo'

interface DashboardHeaderType {
	openNav: boolean
	openDashboardMenu: () => void
}

const DashboardHeader = ({
	openNav,
	openDashboardMenu,
}: DashboardHeaderType) => {
	const dashboardNav = [
		{
			title: 'Trade',
			navs: [
				{
					id: 1,
					title: 'Crypto',
					url: '/dashboard/trade-crypto',
					icon: <Sell />,
				},
				{
					id: 2,
					title: 'GiftCard',
					url: '/dashboard/trade-giftcard',
					icon: <Card />,
				},
				{
					id: 3,
					title: 'Transactions',
					url: '/dashboard/transactions',
					icon: <Transactions />,
				},
				{
					id: 4,
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
	]
	const router = useRouter()

	return (
		<header
			className={`${
				openNav ? 'flex absolute top-0 right-0 w-72 h-full z-50' : 'hidden'
			} md:block md:col-span-1 md:m-3`}>
			<button
				className='md:hidden bg-black p-2 h-max text-gray-100 active:scale-100'
				onClick={openDashboardMenu}>
				<Close />
			</button>
			<div className='bg-black text-gray-100 h-full md:rounded-xl px-8 py-10 flex flex-col justify-between relative w-full'>
				{/* <h1 className='font-black tracking-wide text-2xl'>DuraCoins</h1> */}
				<Logo />

				<nav className='flex flex-col gap-9'>
					<Link href='/dashboard'>
						<a
							className={`flex items-center gap-3 transition-all focus:outline-none ${
								router.pathname === '/dashboard'
									? 'bg-gray-100 rounded text-gray-900 text-base py-2 px-5 font-bold'
									: 'px-1 hover:text-gray-400'
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
									<li key={id}>
										<Link href={url}>
											<a
												className={`flex items-center gap-3 transition-all focus:outline-none ${
													router.pathname === url
														? 'bg-gray-200 rounded text-gray-900 text-base py-2 px-5 font-bold'
														: 'px-1 hover:text-gray-500'
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
	)
}
export default DashboardHeader
