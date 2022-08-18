import React from "react";

const Footer = () => {
	return (
		<div className='absolute whitespace-nowrap text-sm p-6 text-gray-500  left-[50%] translate-x-[-50%] bottom-0 '>
			Copyright &copy; {new Date().getFullYear()} Ahmed maher
		</div>
	);
};

export default Footer;
