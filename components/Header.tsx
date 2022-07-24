import Link from 'next/link';
import { Nav } from './Nav';
import { PriceSection } from './PriceSection';

export const Header = () => {
	return (
		<header className='text-gray-900 hero-bg'>
			<div className='container flex flex-col justify-around md:grid md:grid-cols-5 md:gap-5 min-h-screen lowercase'>
				<section className='col-span-3 grid'>
					<Nav />

					<div>
						<div className='md:max-w-[730px] mt-5 md:mt-0'>
							<h2 className='text-[43px] leading-10 text-center md:text-left md:text-8xl font-black'>
								Trade your <span>crypto</span> & <span>giftcard</span> with ease
							</h2>
							<p className='mt-3 text-center md:text-left max-w-md text-gray-600'>
								Trade over 20+ cryptocurrencies and giftcards with the easiest
								and most trusted agent and get paid instantly.
							</p>
						</div>

						<div className='mt-8 flex items-center gap-6'>
							<Link href='/signup'>
								<a className='bg-gray-900 w-full md:w-max text-center md:text-left md:px-9 py-[14px] text-gray-100 rounded-lg font-semibold transition-colors hover:bg-gray-800 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'>
									Get Started
								</a>
							</Link>
							<button className='border-2 lowercase w-full md:w-max text-center md:text-left border-gray-900 md:px-9 py-3 text-gray-900 rounded-lg transition-colors hover:bg-gray-800 hover:text-gray-100 focus:outline-none focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'>
								Download app
							</button>
						</div>
					</div>
				</section>

				<PriceSection />
			</div>
		</header>
	);
};
