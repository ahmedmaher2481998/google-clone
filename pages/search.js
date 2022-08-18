import React from "react";
import { useRouter } from "next/router";
import SearchHeader from "../components/SearchHeader";

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
	let q = context.query.q;
	// q = encodeURI(q);
	let url =
		"https://www.googleapis.com/customsearch/v1?key={API_KEY}&cx={CX}:omuauf_lfve&q={QUERY}";
	url = url
		.replace("{API_KEY}", process.env.API_KEY)
		.replace("{CX}", process.env.CX)
		.replace("{QUERY}", q);

	console.log(url);
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	return {
		props: { data },
	};
}

export default Search;
