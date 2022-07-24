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
		<nav className='justify-self-start flex items-center justify-between w-full md:justify-start md:gap-12 text-black'>
			<h1 className='font-black tracking-wide text-lg'>Dura-coins</h1>

			<ul className='flex items-center gap-6'>
				{navs?.map(({ id, link, name }) => (
					<li key={id}>
						<Link href={link}>
							<a className='relative text-gray-600 transition-colors hover:text-gray-800 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 after:absolute after:content-[""] after:-bottom-[2px] after:left-0 after:w-full after:h-[1.5px] after:bg-gray-900 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-[100%] hover:after:origin-left'>
								{name}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
