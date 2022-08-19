import { useRouter } from "next/router";
import React from "react";
import ImageResults from "./ImageResults";
import Pagination from "./Pagination";
import ResultItem from "./ResultItem";

const SearchResults = ({ results }) => {
	const router = useRouter();
	return (
		<>
			{router.query.category === "image" ? (
				<ImageResults items={results.items} />
			) : (
				<div className=' lg:pl-36 pl-4 sm:pl-[8%] '>
					<p className='text-gray-600 text-sm mt-3 mb-5 '>
						About {results.searchInformation.formattedTotalResults} result (
						{results.searchInformation.formattedSearchTime} sec)
					</p>
					{results.items.map((item) => {
						return <ResultItem key={item.link} item={item} />;
					})}
					<Pagination />
				</div>
			)}
		</>
	);
};

export default SearchResults;
