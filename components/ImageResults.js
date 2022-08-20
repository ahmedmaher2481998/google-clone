import React from "react";
import Pagination from "./Pagination";

const ImageResults = ({ items }) => {
	return (
		<div className='mt-6 '>
			<div className=' grid grid-col-1 sm:grid-cols-2  mx-4 space-x-4 lg:grid-cols-3 xl:grid-cols-4 '>
				{items.map((item) => (
					<div className='mb-4   group' key={item.link}>
						<a className='' href={item.image.contextLink}>
							<img
								className='h-60 hover:shadow-xl object-contain  '
								src={item.image.thumbnailLink}
							/>
						</a>
						<div className='flex flex-col'>
							<a
								className='text-md text-gray-700 mt-2 group-hover:underline truncate cursor-pointer'
								href={items.link}
							>
								alt={item.title}
							</a>

							<a className='text-sm mt-1 text-gray-500' href={item.link}>
								{item.displayLink}
							</a>
						</div>
					</div>
				))}
			</div>
			<Pagination />
		</div>
	);
};

export default ImageResults;
