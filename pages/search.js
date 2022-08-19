import React from "react";
import { useRouter } from "next/router";
import SearchHeader from "../components/SearchHeader";
import { results } from "../mock/test";
import SearchResults from "../components/SearchResults";
import Head from "next/head";

const Search = ({ data }) => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{router.query.q} - Google search</title>
			</Head>
			<SearchHeader />
			<SearchResults results={data} />
		</>
	);
};

export async function getServerSideProps(context) {
	const mockData = false;
	const startIndex = +context.query.start || 1;
	const res = mockData
		? results
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${
					process.env.API_KEY
				}&cx=${process.env.CX}&q=${context.query.q.trim()}${
					context.query.category ? "&searchType=image" : ""
				}&start=${startIndex}`
		  ).then((d) => d.json());

	return {
		props: { data: res },
	};
}

export default Search;
