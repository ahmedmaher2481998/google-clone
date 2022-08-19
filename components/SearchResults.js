import React from "react";

const SearchResults = ({ results }) => {
	return (
		<>
			<div>
				<p className='text-gray-500 mt-3 mb-5 pl-36'>
					About {results.searchInformation.formattedTotalResults} result (
					{results.searchInformation.formattedSearchTime} sec)
				</p>
			</div>
		</>
	);
};

export default SearchResults;
