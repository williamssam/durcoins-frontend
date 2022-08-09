import Hero from './Hero';
import { Nav } from './Nav';

export const Header = () => {
	return (
		<header className=' bg-black text-gray-100 hero-bg'>
			<Nav />

			<Hero />
		</header>
	);
};
