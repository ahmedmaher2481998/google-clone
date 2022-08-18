import Head from "next/head";
import Header from "../components/Header";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Footer from "../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Home() {
	const [query, setQuery] = useState("");
	const router = useRouter();
	const search = (e) => {
		e.preventDefault();
		if (!query.trim()) return;
		router.push(`/search?q=${query}`);
	};
	return (
		<div>
			<Head>
				<title>Google</title>
				<meta name='description' content='Google Search Engine ' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			{/* Body */}
			<div className='w-screen mt-40 text-center'>
				<Image
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png'
					alt='Google logo'
					width='400'
					height='135'
					objectFit='cover'
				/>
				<form>
					<div
						className='border p-4 rounded-full flex hover:shadow-lg items-center focus:shadow-xl focus:border-2 justify-center mx-auto 
					sm:w-2/4 mt-4 w-[90%] max-w-2xl'
					>
						<SearchIcon className='w-5 text-gray-500 ' />
						<input
							onChange={(e) => setQuery(e.target.value)}
							value={query}
							type='text'
							className='text-sm focus:outline-none w-[90%]'
						/>
						<MicrophoneIcon className='w-5  cursor-pointer   mr-2 ' />
					</div>
					<div className='flex sm:flex-row flex-col w-[90%] mx-auto justify-center mt-6'>
						<button onClick={search} className='btn'>
							Google search
						</button>
						<button className='btn'>I&apos;m feeling lucky </button>
					</div>
				</form>
			</div>
			{/* ?Footer  */}
			<Footer />{" "}
		</div>
	);
}
