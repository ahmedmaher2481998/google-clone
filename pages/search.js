import React from "react";
import { useRouter } from "next/router";
import SearchHeader from "../components/SearchHeader";
import { results } from "../mock/test";
const Search = ({ data }) => {
	console.log(data);
	const router = useRouter();

	return (
		<>
			<SearchHeader />
		</>
	);
};

export async function getServerSideProps(context) {
	let url = `https://www.googleapis.com/customsearch/v1?key=${
		process.env.API_KEY
	}&cx=${process.env.CX}&q=${context.query.q.trim()}${
		context.query.category ? "&searchType=image" : ""
	}`;

	`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
		process.env.CONTEXT_KEY
	}&q=${context.query.q}${context.query.searchType && "&searchType=image"}`;
	const mockData = true;

	const res = mockData ? results : await fetch(url).then((d) => d.json());

	return {
		props: { data: res },
	};
}

export default Search;
