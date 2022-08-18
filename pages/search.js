import React from "react";
import { useRouter } from "next/router";
const Search = () => {
	const router = useRouter();
	const query = router.query.q;
	return <div>{query}</div>;
};

export default Search;
