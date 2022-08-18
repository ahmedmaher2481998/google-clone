import { useState } from "react";
import { SearchIcon, MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
const SearchHeader = () => {
	const router = useRouter();
	const [query, setQuery] = useState("");
	return (
		<>
			<div
				className='border p-2 rounded-full flex hover:shadow-lg items-center focus:shadow-xl h-14 focus:border-2 justify-center mx-auto 
					sm:w-2/4 mt-4 w-[90%] max-w-2xl'
			>
				<input
					onChange={(e) => setQuery(e.target.value)}
					value={query}
					defaultValue={router.query.p}
					type='text'
					className='text-sm sm:text-md ml-4 border focus:outline-none w-[90%]'
				/>
				<XIcon
					className='w-7 mr-2 cursor-pointer'
					onClick={() => setQuery("")}
				/>
				<MicrophoneIcon className='w-6  hidden sm:inline-flex cursor-pointer border-l-2  text-gray-500 mr-2 ' />
				<SearchIcon className='w-6 text-gray-500 cursor-pointer hidden sm:inline-flex mr-2' />
			</div>
		</>
	);
};

export default SearchHeader;
