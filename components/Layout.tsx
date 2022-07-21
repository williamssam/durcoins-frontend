import { Footer } from './Footer';
import { Header } from './Nav';

type LayoutProps = {
	children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};
