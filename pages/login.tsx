import { Input } from '@/components/Input';
import Google from 'assets/icons/Google';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
	return (
		<>
			<Head>
				<title>Sign Up | Durocoins</title>
			</Head>
			<section className='container flex flex-col justify-center md:grid md:grid-cols-7 md:gap-20 min-h-screen'>
				<div className='col-span-4 flex flex-col justify-center'>
					<Link href='/'>
						<a className='text-2xl font-black text-center md:text-left tracking-wide uppercase'>
							Duro-coins
						</a>
					</Link>
					<ul className='sr-only md:not-sr-only'>
						<li>Get started quickly</li>
						<li>Sell 20+ cryptocurrencies and giftcards</li>
						<li>Get paid instantly.</li>
					</ul>
				</div>
				<div className='col-span-3 bg-gray-900 my-4 shadow-xl rounded-lg px-4 py-6 md:p-10 md:flex md:flex-col '>
					<div className='flex flex-col gap-1 text-center md:text-left'>
						<p className='uppercase tracking-wider text-gray-100 text-sm font-bold'>
							Start your trading journey
						</p>
						<h3 className='font-bold text-3xl md:text-4xl text-gray-100'>
							Sign In to Dura-coins
						</h3>
						<p className='text-gray-300 pt-2 text-sm'>
							Don&apos;t have an account?{' '}
							<Link href='/signup'>
								<a className='text-gray-100 font-bold'>Sign up</a>
							</Link>
						</p>
					</div>

					<button className='border-2 border-gray-500 rounded-lg text-center w-full py-2 mt-8 text-gray-200 hover:bg-gray-800 transition-colors text-lg flex items-center justify-center gap-2 font-bold'>
						<Google />
						<span>Login with Google</span>
					</button>

					{/* divider */}
					<div className='text-sm text-gray-300 text-center my-6 relative after:absolute after:left-0 after:w-5/12 after:content-[""] after:h-[1px] after:bg-gray-600 after:top-1/2 after:-translate-y-1/2 before:absolute before:right-0 before:w-5/12 before:content-[""] before:h-[1px] before:bg-gray-600 before:top-1/2 before:-translate-y-1/2'>
						<p className='tracking-widest uppercase'>OR</p>
					</div>

					<form className='flex flex-col gap-6'>
						<Input type='email' label='Email Address' />
						<Input type='password' label='Password' />

						<button
							type='submit'
							className='bg-gray-700 text-gray-100 py-3 rounded-md text-lg'>
							Sign in
						</button>
					</form>
					<Link href='/forgot-password'>
						<a className='text-gray-100 text-center mt-3 text-sm font-bold focus:outline-none'>
							Forgot your password?
						</a>
					</Link>
				</div>
			</section>
			{/* </header> */}
		</>
	);
};
export default Login;
