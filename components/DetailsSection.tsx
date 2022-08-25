import Handshake from '@/assets/icons/Handshake';
import Swap from '@/assets/icons/Swap';
import Wallet from '@/assets/icons/Wallet';

export const DetailsSection = () => {
	const details = [
		{
			id: 1,
			icon: <Swap />,
			title: 'Instant Swap',
			content:
				'Instantly swap and trade your crypto assets on the go and get paid instantly.',
		},
		{
			id: 2,
			icon: <Handshake />,
			title: 'P2P Trade',
			content:
				'Instantly swap and trade your crypto assets on the go without much stress',
		},
		{
			id: 3,
			icon: <Wallet size={48} />,
			title: 'Crypto Wallet',
			content:
				'Instantly swap and trade your crypto assets on the go without much stress',
		},
	];
	return (
		<section>
			<div className='container mt-20 md:mt-28 flex flex-col items-center'>
				<header className='text-center'>
					<div className='max-w-xl'>
						<h2 className='text-3xl md:text-5xl font-black text-gray-900'>
							Easily trade and manage your crypto wallet
						</h2>
						<p className='pt-5 text-gray-600'>
							Duro-coins is a p2p trading platform designed with speed, security
							and quality of service as our number one priority. Trade with ease
							and speed.
						</p>
					</div>
				</header>

				<ul className='grid md:grid-cols-3 gap-10 max-w-4xl mt-16'>
					{details?.map(({ id, title, content, icon }) => (
						<li
							className='bg-gray-200 py-10 px-7 rounded-md text-gray-900 '
							key={id}>
							{icon}
							<div className='mt-4'>
								<h4 className='font-bold text-xl'>{title}</h4>
								<p className='pt-2 text-gray-600'>{content}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
