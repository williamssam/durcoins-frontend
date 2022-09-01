// import forgetPasswordIllustration from '@/assets/images/forget-password.svg';
import ArrowLeft from '@/assets/icons/ArrowLeft';
import { Input } from '@/components/Input';
import Head from 'next/head';
import { useRouter } from 'next/router';
const ForgotPassword = () => {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>Forget Password | Durocoins</title>
			</Head>
			<section className='grid grid-col-2 md:grid-cols-5 pb-6 md:py-0 text-gray-900 min-h-screen'>
				<div className='md:col-span-3 h-40 md:h-full flex flex-col justify-center forget-password-pattern'>
					{/* <Image alt='' src={forgetPasswordIllustration} layout='fill' /> */}
				</div>

				<div className='md:col-span-2 px-4 py-6 md:p-10 md:px-20 md:pr-32 md:self-center'>
					<button
						onClick={() => router.back()}
						className='flex items-center gap-1 text-gray-800 rounded-md md:mt-5 text-xs hover:bg-gray-900 hover:text-gray-100 p-1'>
						<ArrowLeft />
						Back To Before
					</button>
					<header className='mt-5'>
						<p className='uppercase tracking-wider text-sm font-bold'>
							Hmmm, my password 🤔
						</p>
						<h2 className='font-black text-4xl'>Forgot your Password? 😔</h2>
						<p className='pt-2 text-sm'>Don&apos;t worry, we got you.</p>
					</header>

					<form className='mt-20'>
						<Input label='Enter your Email Address' type='email' />
						<button className='bg-gray-900 py-2 px-10 text-gray-100 rounded mt-5'>
							Reset Password
						</button>
					</form>
				</div>
			</section>
		</>
	);
};
export default ForgotPassword;
