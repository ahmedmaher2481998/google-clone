import { useRouter } from "next/router";

const SearchCategory = ({ title, selected, Icon }) => {
	const router = useRouter();
	return (
		<>
			<div
				className={` w-min text-sm flex text-gray-500 space-x-4 hover:text-blue-600 border-b-2  cursor-pointer border-transparent hover:border-blue-600 ${
					selected ? "text-blue-600 border-blue-600" : ""
				}`}
				onClick={() =>
					router.push(
						`search?q=${router.query.q}&category=${
							title === "Images" ? "image" : ""
						}`
					)
				}
			>
				<p>{title}</p>
				<Icon className='w-5' />
			</div>
		</>
	);
};

export default SearchCategory;
