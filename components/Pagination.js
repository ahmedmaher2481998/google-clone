import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Pagination = () => {
	const router = useRouter();

	const startIndex = +router.query.start || 1;
	const goToPage = (startIndex) => {
		router.push(
			`/search?q=${router.query.q}&&category=${router.query.category}&&start=${startIndex}`
		);
	};
	return (
		<>
			<div className='p-4 group flex space-x-20 items-center justify-start '>
				{startIndex > 10 && (
					<button
						className='cursor-pointer w-8 text-blue-700 '
						onClick={() => goToPage(startIndex - 10)}
					>
						<ChevronLeftIcon />
						<p className='group-hover:underline'>Previous</p>
					</button>
				)}
				{startIndex < 90 && (
					<button
						className='cursor-pointer w-8 text-blue-700 '
						onClick={() => goToPage(startIndex + 10)}
					>
						<ChevronRightIcon />
						<p className='group-hover:underline'>Next</p>
					</button>
				)}
			</div>
		</>
	);
};

export default Pagination;
