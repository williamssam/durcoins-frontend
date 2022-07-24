import Link from 'next/link';

export const BeginJourney = () => {
	return (
		<section className='bg-gray-600 text-gray-100 py-20 mt-32'>
			<div className='container flex flex-col items-center lowercase'>
				<header className='text-center'>
					<h2 className='text-4xl font-bold'>
						Ready to begin your crypto journey?
					</h2>
					<p className='pt-2'>
						Don&apos;t go crazy looking for where to sell your crypto.
						We&apos;re here for you!!
					</p>
				</header>

				<Link href='/signup'>
					<a className='bg-gray-100 px-7 py-[10px] text-gray-900 rounded-lg font-semibold mt-10 tracking-wide focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100'>
						Get Started
					</a>
				</Link>
			</div>
		</section>
	);
};
