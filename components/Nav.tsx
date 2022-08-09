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
		<div className='container pt-3'>
			<nav className='flex items-center justify-between w-full  md:gap-12 text-gray-900 bg-gray-100 py-3 px-6 rounded-md'>
				<h1 className='font-black tracking-wide text-lg'>Dura-coins</h1>

				<ul className='flex items-center gap-6'>
					{navs?.map(({ id, link, name }) => (
						<li key={id}>
							<Link href={link}>
								<a className='relative capitalize text-sm text-gray-700 transition-colors hover:text-gray-900 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 after:absolute after:content-[""] after:-bottom-[2px] after:left-0 after:w-full after:h-[1.5px] after:bg-gray-900 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-[100%] hover:after:origin-left'>
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
