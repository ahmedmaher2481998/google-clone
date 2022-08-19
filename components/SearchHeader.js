import { useState } from "react";
import { SearchIcon, MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Image from "next/image";
import User from "./User";
import SearchCategories from "./SearchCategories";
const SearchHeader = () => {
	const router = useRouter();
	const [query, setQuery] = useState(router.query.q);
	const search = (e) => {
		e.preventDefault();
		router.push(`search?q=${router.query.q}`);
	};
	return (
		<div className='bg-white sticky top-0 p-2  w-screen'>
			<div className='flex  justify-center items-center mt-4'>
				<Image
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png'
					alt='Google logo'
					width='100'
					onClick={() => router.push("/")}
					className='cursor-pointer'
					height='30'
					objectFit='contain'
				/>
				<form className='flex-grow' onSubmit={search}>
					<div className='border p-2 shadow-lg rounded-full flex hover:shadow-lg items-center focus:shadow-xl h-14 focus:border-2 justify-center mx-auto w-[90%] max-w-2xl ml-2 '>
						<input
							onChange={(e) => {
								const newQuery = e.target.value;
								setQuery(newQuery);
								router.query.q = newQuery.trim();
							}}
							value={query}
							type='text'
							className='text-sm sm:text-md ml-4 focus:outline-none w-[90%]'
						/>
						<XIcon
							className='w-7 mr-2 cursor-pointer'
							onClick={() => setQuery("")}
						/>
						<MicrophoneIcon className='w-5  hidden sm:inline-flex cursor-pointer border-l-2  text-blue-500 mr-2 ' />
						<SearchIcon
							onClick={search}
							className='w-5 text-blue-500 cursor-pointer hidden sm:inline-flex mr-2'
						/>
					</div>
				</form>

				<User className='mr-4' />
			</div>
			<SearchCategories />
		</div>
	);
};

export default SearchHeader;
