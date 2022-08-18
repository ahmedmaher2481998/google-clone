import React from "react";
import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";
export default function SignIn({ providers }) {
	return (
		<div className='h-[90vh]'>
			<Header />
			<div>
				{Object.values(providers).map((provider) => {
					return (
						<div
							className='flex flex-col items-center mt-20 space-y-10'
							key={provider.name}
						>
							<img
								className='object-cover w-[60vw] md:w-[30vw]'
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/640px-Google_Images_2015_logo.svg.png'
								alt='google logo'
							/>

							<button
								className='text-white p-3 font-semibold bg-red-400 hover:bg-red-600 rounded-lg'
								onClick={() => signIn(provider.id, { callbackUrl: "/" })}
							>
								Sign in with {provider.name}
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
export async function getServerSideProps() {
	const providers = await getProviders();
	return {
		props: { providers },
	};
}
