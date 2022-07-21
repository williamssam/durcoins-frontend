import Link from 'next/link';

export const Nav = () => {
	return (
		// fixed top-3 left-1/2 -translate-x-1/2
		<nav className='justify-self-start flex items-center gap-10 text-gray-100'>
			<h1 className='font-black uppercase tracking-wide text-lg'>Dura-coins</h1>

			<ul className='flex items-center gap-5 text-sm'>
				<li>
					<Link href='/login'>
						<a>Log in</a>
					</Link>
				</li>
				<li>
					<Link href='/signup'>
						<a>Sign up</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
