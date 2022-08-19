import React from "react";
import { useRouter } from "next/router";
import SearchHeader from "../components/SearchHeader";
import { results } from "../mock/test";
import SearchResults from "../components/SearchResults";
const Search = ({ data }) => {
	const router = useRouter();

	return (
		<>
			<SearchHeader />
			<SearchResults results={data} />
		</>
	);
};

export async function getServerSideProps(context) {
	const mockData = true;

	const res = mockData
		? results
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${
					process.env.API_KEY
				}&cx=${process.env.CX}&q=${context.query.q.trim()}${
					context.query.category ? "&searchType=image" : ""
				}`
		  ).then((d) => d.json());

	return {
		props: { data: res },
	};
}

export default Search;
