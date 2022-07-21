import Image from 'next/image';
import playStoreImg from '../public/play-store.png';

export const DownloadApp = () => {
	return (
		<section className='mt-32'>
			<div className='container grid grid-cols-2'>
				<header>
					<h2 className='text-5xl font-black text-gray-900'>
						Download our app
					</h2>
					<p className='pt-2'>
						Get the best mobile experience on <strong>duro-coins</strong>{' '}
						mobile. <br /> Download our app today
					</p>

					<div className='pt-10'>
						<Image
							src={playStoreImg}
							alt='play store'
							width={200}
							height={60}
						/>
					</div>
				</header>

				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
						facilis magnam! Ipsum, non earum adipisci saepe voluptatem qui ipsa
						impedit consequuntur laborum, optio assumenda quod soluta nihil
						commodi eum maiores, ab rerum ducimus deleniti recusandae aliquam.
						In nemo incidunt rem molestiae officiis non facere, minus expedita
						corporis, amet atque numquam architecto quos reiciendis omnis. Quae
						blanditiis obcaecati dicta aperiam, eligendi minima iste ratione
						amet quidem facilis ipsum sequi error sit dolorum nobis voluptate
						eius repudiandae veniam! Saepe, perspiciatis neque sint quam iusto,
						inventore, laborum a fugiat provident reiciendis nesciunt rem
						similique laboriosam tempore quae eveniet explicabo deserunt sunt
						maiores. Vitae?
					</p>
				</div>
			</div>
		</section>
	);
};
