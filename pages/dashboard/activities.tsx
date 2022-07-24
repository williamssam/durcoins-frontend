import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import Head from 'next/head';
import { ReactElement } from 'react';

const Activities = () => {
	return (
		<>
			<Head>
				<title>Activities - Dura-coins</title>
			</Head>
			<div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Exercitationem doloribus quibusdam recusandae, modi assumenda ut
					excepturi nulla, dolorem illum mollitia vitae impedit, neque maxime
					harum error. Adipisci asperiores fuga saepe!
				</p>
			</div>
		</>
	);
};

Activities.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>;
};

export default Activities;
