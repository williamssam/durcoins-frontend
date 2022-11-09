import MetaMask from '@/assets/logo/MetaMask'
import Link from 'next/link'

export const Nav = () => {
	const navs = [
		{
			id: 1,
			name: 'dashboard',
			link: '/dashboard',
		},
		{
			id: 2,
			name: 'log in',
			link: '/login',
		},
		{
			id: 3,
			name: 'sign up',
			link: '/signup',
		},
	]
	return (
		// fixed top-3 left-1/2 -translate-x-1/2
		<div className='container'>
			<nav className='flex items-center justify-between w-full md:gap-12 text-gray-900 bg-gray-100 py-2 px-5 md:px-10 rounded-bl-xl rounded-br-xl shadow-duro-coins'>
				<h1 className='font-black tracking-wide text-lg'>Dura-coins</h1>

				<ul className='flex items-center gap-6'>
					{navs?.map(({ id, link, name }) => (
						<li key={id}>
							<Link href={link}>
								<a className='capitalize text-sm text-gray-700 hover:font-bold hovered-link'>
									{name}
								</a>
							</Link>
						</li>
					))}
					<li>
						<Link href='#'>
							<a className='uppercase text-xs flex items-center gap-1 font-bold text-gray-100 bg-gray-800 hover:bg-gray-900 py-2 px-4 rounded-md transition-all'>
								<MetaMask />
								<span>Sign in With ETH</span>
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}
