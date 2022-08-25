import ArrowLeft from '@/assets/icons/ArrowLeft';
import { Input } from '@/components/Input';
import Google from 'assets/icons/Google';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Signup: NextPage = () => {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>Sign Up | Durocoins</title>
			</Head>
			<section className=''>
				<div className='container flex flex-col justify-center md:grid md:grid-cols-7 md:gap-20 py-6 md:py-0 text-gray-900 min-h-screen'>
					<div className='col-span-3 px-4 py-6 md:p-10 order-2 md:order-1 md:self-center'>
						<button
							onClick={() => router.push('/')}
							className='flex items-center gap-1 text-gray-800 rounded-md mt-5 text-xs hover:bg-gray-900 hover:text-gray-100 p-1'>
							<ArrowLeft />
							Back Home
						</button>
						<div className='flex flex-col text-center mt-5 md:text-left'>
							<p className='uppercase tracking-wider text-sm font-bold'>
								Register now
							</p>
							<h3 className='font-bold text-2xl md:text-4xl'>
								Create your free account
							</h3>
							<p className='pt-2 text-sm'>
								Already have an account😍?{' '}
								<Link href='/login'>
									<a className='text-gray-500 font-bold hovered-link'>
										Sign in here
									</a>
								</Link>
							</p>
						</div>

						<button className='border-2 border-gray-900 rounded-lg text-center w-full py-2 mt-8 hover:bg-gray-900 hover:text-gray-100 transition-colors flex items-center justify-center gap-2 font-bold'>
							<Google />
							<span>Login with Google</span>
						</button>

						<div className='text-sm text-gray-400 text-center my-5 relative after:absolute after:left-0 after:w-5/12 after:content-[""] after:h-[1px] after:bg-gray-300 after:top-1/2 after:-translate-y-1/2 before:absolute before:right-0 before:w-5/12 before:content-[""] before:h-[1px] before:bg-gray-300 before:top-1/2 before:-translate-y-1/2'>
							<p className='tracking-widest uppercase'>OR</p>
						</div>

						<form className='flex flex-col gap-8 mt-10'>
							<Input type='text' label='Username' />
							<Input type='email' label='Email Address' />
							<Input type='text' label='Phone number' />
							<Input type='password' label='Password' />

							<button
								type='submit'
								className='bg-gray-900 text-gray-100 py-3 rounded-md'>
								Create an account
							</button>
						</form>
					</div>
					<div className='col-span-4 flex flex-col justify-center order-1 md:order-2 bg-signup-bg bg-cover'>
						{/* <Link href='/'>
							<a className='text-2xl font-black text-center md:text-left tracking-wide uppercase'>
								Duro-coins
							</a>
						</Link>
						<ul className='sr-only md:not-sr-only'>
							<li>Get started quickly</li>
							<li>Sell 20+ cryptocurrencies and giftcards</li>
							<li>Get paid instantly.</li>
						</ul> */}
					</div>
				</div>
			</section>
		</>
	);
};
export default Signup;
