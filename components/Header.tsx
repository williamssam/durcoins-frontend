import { Nav } from './Nav';
import { PriceSection } from './PriceSection';

export const Header = () => {
	return (
		<header className='bg-gray-900 hero-bg text-gray-100'>
			<section className='container grid grid-cols-5 gap-5 min-h-screen'>
				<div className='col-span-3 grid'>
					<Nav />

					<div>
						<div className='max-w-[750px]'>
							<h2 className='text-8xl font-black'>
								Trade your <span>crypto</span> & <span>giftcard</span> with ease
							</h2>
							<p className='mt-2 max-w-md'>
								Sell over 20+ cryptocurrencies and giftcards with the easiest
								and most trusted agent and get paid instantly.
							</p>
						</div>

						<div className='mt-8 flex items-center gap-6'>
							<button className='bg-gray-100 px-7 py-[10px] text-gray-900 rounded-lg font-semibold'>
								Get Started
							</button>
							<button className='border-2 border-gray-100 px-7 py-2 text-gray-100 rounded-lg'>
								Download app
							</button>
						</div>
					</div>
				</div>

				<PriceSection />
			</section>
		</header>
	);
};
