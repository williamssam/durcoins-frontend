import Image from 'next/image'
import playStoreImg from '../public/play-store.png'

export const DownloadApp = () => {
	return (
		<section className='mt-32'>
			<div className='container grid md:grid-cols-2'>
				<header className='text-center md:text-left'>
					<h2 className='text-3xl md:text-5xl font-black text-gray-900'>
						Download our app
					</h2>
					<p className='pt-2 text-gray-600 md:w-96'>
						Get the best mobile experience on <strong>DuraCoins</strong> mobile.
						Download our app today
					</p>

					<div className='pt-6'>
						<Image
							src={playStoreImg}
							alt='play store'
							width={160}
							height={50}
						/>
					</div>
				</header>

				<div className='mt-3 md:mt-0'>
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
	)
}
