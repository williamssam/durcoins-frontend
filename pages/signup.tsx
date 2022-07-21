import { NextPage } from 'next';
import Head from 'next/head';

const Signup: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sign Up | Durocoins</title>
			</Head>
			<section className='grid grid-cols-3 min-h-screen'>
				<div className='px-10 bg-gray-900 text-gray-100 flex flex-col py-10'>
					<header>
						<h2 className='flex flex-col uppercase tracking-wide'>
							welcome to <span className='font-black text-3xl'>Durocoins</span>
						</h2>
						<p className='pt-5'>
							Let&apos;s get you all setup, so you can start trading.
						</p>
					</header>

					<form className='flex flex-col'>
						<label>
							<span>Username</span>
							<input type='text' name='' id='' />
						</label>
						<label>
							<span>Email Addres</span>
							<input type='email' name='' id='' />
						</label>
						<label>
							<span>Phone Number</span>
							<input type='text' name='' id='' />
						</label>
						<label>
							<span>Password</span>
							<input type='password' name='' id='' />
						</label>
						<label>
							<span>Confirm Password</span>
							<input type='password' name='' id='' />
						</label>
					</form>
				</div>
				<div className='col-span-2'></div>
			</section>
		</>
	);
};
export default Signup;
