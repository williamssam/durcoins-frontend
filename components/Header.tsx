import Warning from '@/assets/icons/Warning'
import Whatsapp from '@/assets/icons/Whatsapp'
import Hero from './Hero'
import { Nav } from './Nav'

export const Header = () => {
	return (
		<>
			{/* remeber to delete */}
			<div className='flex items-center justify-between py-2 px-5 fixed top w-full bg-yellow-400 z-50'>
				<p className='text-red-800 font-bold flex items-center gap-1'>
					<Warning />
					<span>Site still under construction</span>
				</p>
				<a
					href='https://api.whatsapp.com/send?phone=2348037604395&text=Thank%20you%20for%20contacting%20DuraCoins%20%F0%9F%A4%A9.%20%20What%20do%20you%20want%20to%20trade%20with%20us%2C%20Giftcard%2C%20BTC%20or%20USDT%E2%9D%93'
					className='uppercase text-xs flex items-center gap-1 font-bold text-gray-100 bg-green-600 hover:bg-green-800 py-2 px-4 rounded-md transition-all'>
					<Whatsapp /> <span>Chat with us on WhatsApp</span>
				</a>
			</div>
			<header className='bg-black text-gray-100 hero-bg'>
				<Nav />

				<Hero />
			</header>
		</>
	)
}
