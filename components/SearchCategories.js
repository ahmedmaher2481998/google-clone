import SearchCategory from "./SearchCategory";
import { SearchIcon, PhotographIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
const SearchCategories = () => {
	const router = useRouter();

	return (
		<div className=' border-gray-300 flex pl-0  md:justify-start md:pl-32 mt-6 space-x-8 border-b-2  mx-2 justify-center'>
			<SearchCategory
				title={"All"}
				Icon={SearchIcon}
				selected={
					router.query.category === "" ||
					router.query.category === "all" ||
					router.query.category !== "image"
				}
			/>
			<SearchCategory
				title={"Images"}
				Icon={PhotographIcon}
				selected={router.query.category === "image"}
			/>
		</div>
	);
};

export default SearchCategories;
