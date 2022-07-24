import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { Input } from '@/components/Input';
import Head from 'next/head';
import { ReactElement } from 'react';

const Profile = () => {
	return (
		<>
			<Head>
				<title>Profile - Dura-coins</title>
			</Head>
			<section>
				<div>
					<h3>Personal Information</h3>
					<div>
						<p>image</p>
						<button>Upload Photo</button>
					</div>

					<div>
						{/* <Input label='First Name' type='text' />
						<Input label='Last Name' type='text' /> */}
						<input type='text' name='' id='' />
					</div>
				</div>

				<div>
					<h3>Login Information</h3>

					<ul>
						<li>
							<p>Username</p>
							<p>SuperBreezy</p>
						</li>
						<li>
							<p>Email</p>
							<p>superbreezy007@outlook.com</p>
						</li>
						<li>
							<p>Phone</p>
							<p>08123456784</p>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

Profile.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>;
};

export default Profile;
