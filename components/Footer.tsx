import Facebook from '@/assets/icons/Facebook';
import Instagram from '@/assets/icons/Instagram';
import Mail from '@/assets/icons/Mail';
import Twitter from '@/assets/icons/Twitter';
import Whatsapp from '@/assets/icons/Whatsapp';

export const Footer = () => {
	return (
		<footer className='bg-gray-200 text-gray-900'>
			<div className='container py-5 lowercase'>
				<div className='flex flex-col md:flex-row items-center justify-between'>
					<div>
						<h4 className='font-black tracking-wide text-2xl'>Dura-coins</h4>
						<p className='text-[10px]'>&copy; 2022 | All rights reserved.</p>
					</div>

					<div className='flex flex-col md:flex-row items-center gap-6 mt-5'>
						<ul className='text-sm flex flex-col md:flex-row gap-2 md:gap-4'>
							<li>
								<a
									className='bg-gray-100 text-gray-700 rounded-md flex items-center justify-center md:justify-start p-2 gap-2 transition-colors hover:bg-gray-300 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700'
									href='mailto:michealdurdola@gmail.com'>
									<Mail />
									michealdurdola@gmail.com
								</a>
							</li>
							<li>
								<a
									className='bg-gray-100 text-gray-700 rounded-md flex items-center justify-center md:justify-start p-2 gap-2 transition-colors hover:bg-gray-300 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700'
									href='tel:2348123456789'>
									<Whatsapp />
									+234 8123456789
								</a>
							</li>
							{/* <li>
								<a
									className='bg-gray-100 text-gray-700 rounded-md flex items-center p-2 gap-2 transition-colors hover:bg-gray-300'
									href='tel:2348123456789'>
									<Phone />
									+234 8123456789
								</a>
							</li> */}
						</ul>
						<ul className='flex justify-end text-xs lowercase gap-4 text-gray-600'>
							<li>
								<a
									href=''
									className='transition-colors hover:text-gray-900 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700'
									target='_blank'
									rel='noreferrer'>
									<Twitter />
								</a>
							</li>
							<li>
								<a
									href=''
									className='transition-colors hover:text-gray-900 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700'
									target='_blank'
									rel='noreferrer'>
									<Instagram />
								</a>
							</li>
							<li>
								<a
									href=''
									className='transition-colors hover:text-gray-900 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700'
									target='_blank'
									rel='noreferrer'>
									<Facebook />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};
