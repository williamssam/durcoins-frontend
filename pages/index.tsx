import { BeginJourney } from '@/components/BeginJourney';
import { DetailsSection } from '@/components/DetailsSection';
import { DownloadApp } from '@/components/DownloadApp';
import { Footer } from '@/components/Footer';
import { GetStarted } from '@/components/GetStarted';
import { Header } from '@/components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Duracoins</title>
			</Head>
			<Header />
			<DetailsSection />
			<GetStarted />
			<DownloadApp />
			<BeginJourney />
			<Footer />
			{/* <PriceBanner /> */}
		</>
	);
};

export default Home;
