import Link from 'next/link';

export const Nav = () => {
	const navs = [
		{
			id: 1,
			name: 'about',
			link: '',
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
	];
	return (
		// fixed top-3 left-1/2 -translate-x-1/2
		<div className='container'>
			<nav className='flex items-center justify-between w-full md:gap-12 text-gray-900 bg-gray-100 py-3 px-10 rounded-bl-lg rounded-br-lg'>
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
				</ul>
			</nav>
		</div>
	);
};
