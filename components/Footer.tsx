export const Footer = () => {
	return (
		<footer className='bg-gray-200 text-gray-900'>
			<div className='container py-5'>
				<div className='flex items-center justify-between'>
					<div>
						<h4 className='font-black uppercase tracking-wide text-2xl'>
							Dura-coins
						</h4>
						<p className='text-[10px]'>&copy; 2022 | All rights reserved.</p>
					</div>
					<ul className='text-xs flex gap-4'>
						<li>
							email:{' '}
							<a href='mailto:michealdurdola@gmail.com'>
								michealdurdola@gmail.com
							</a>
						</li>
						<li>
							whatsapp: <span>+234 8123456789</span>
						</li>
						<li>
							call: <span>+234 8123456789</span>
						</li>
					</ul>
				</div>
				{/* <div></div> */}
			</div>
		</footer>
	);
};
