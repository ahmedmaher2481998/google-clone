import React from "react";
import parse from "html-react-parser";
function ResultItem({ item }) {
	return (
		<div className='mb-8 max-w-xl '>
			<div className='group '>
				<a className='text-sm  text-gray-800 truncate' href={item.link}>
					{item.displayLink}
				</a>{" "}
				<br />
				<a
					className='text-xl text-blue-800 decoration-blue-800 group-hover:underline font-medium '
					href={item.link}
				>
					<h2>{item.title}</h2>
				</a>
			</div>
			<p className='text-gray-600'>{parse(item.htmlSnippet)}</p>
		</div>
	);
}

export default ResultItem;
