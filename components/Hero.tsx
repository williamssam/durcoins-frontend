import P2P from '@/public/p2p.png';
import Image from 'next/image';
import Link from 'next/link';
const Hero = () => {
	return (
		<div className='container py-20 md:py-6 flex flex-col justify-around md:grid md:grid-cols-4 md:place-items-center md:gap-20'>
			<section className='col-span-2'>
				<div className='md:max-w-[730px] mt-5 md:mt-0'>
					<h2 className='text-[43px] leading-normal text-center md:text-left md:text-[80px] md:leading-none font-black'>
						Trade your <span>crypto</span> & <span>giftcard</span> with ease
					</h2>
					<p className='mt-3 text-center md:text-left max-w-md text-gray-300'>
						Trade over 20+ cryptocurrencies and giftcards with the easiest and
						most trusted agent and get paid instantly.
					</p>
				</div>

				<div className='mt-8 flex items-center gap-6'>
					<Link href='/signup'>
						<a className='bg-gray-100 w-full md:w-max text-center md:text-left md:px-9 py-[14px] text-gray-900 rounded-lg font-semibold transition-colors hover:bg-gray-300 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'>
							Get Started
						</a>
					</Link>
					<button className='border-2 w-full md:w-max text-center md:text-left border-gray-100 md:px-9 py-3 text-gray-100 rounded-lg transition-colors hover:bg-gray-800 hover:text-gray-100 focus:outline-none focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'>
						Download app
					</button>
				</div>
			</section>

			{/* <PriceSection /> */}
			<section className='col-span-2 hidden md:block'>
				<Image src={P2P} alt='bitcoin p2p exchange' />
			</section>
		</div>
	);
};
export default Hero;
