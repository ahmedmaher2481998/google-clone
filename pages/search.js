import React from "react";
import { useRouter } from "next/router";
import SearchHeader from "../components/SearchHeader";

const Search = () => {
	const router = useRouter();
	const query = router.query.q;
	return (
		<>
			<SearchHeader />
		</>
	);
};

export default Search;
