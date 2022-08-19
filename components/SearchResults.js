import React from "react";

const SearchResults = ({ results }) => {
	const item = results.items[0];
	return (
		<>
			<div className=' lg:pl-36 pl-4 sm:pl-[8%] '>
				<p className='text-gray-600 text-sm mt-3 mb-5 '>
					About {results.searchInformation.formattedTotalResults} result (
					{results.searchInformation.formattedSearchTime} sec)
				</p>
				{/* {results.items.map((item) => {
					return (
						<>
							<p>{JSON.stringify(item)}</p>
						</>
					);
				})} */}
				<div>
					<a className='text-sm text-gray-700' href={item.formattedUrl}>
						{item.displayLink}
					</a>
					<a href={item.formattedUrl}>{item.title}</a>
					<p>{item.snippet}</p>
				</div>
			</div>
		</>
	);
};

export default SearchResults;
