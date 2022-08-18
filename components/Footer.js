import React from "react";

const Footer = () => {
	return (
		<div className='absolute whitespace-nowrap text-md p-6 text-gray-400  left-[50%] translate-x-[-50%] bottom-0 '>
			Copyright &copy; {new Date().getFullYear()} Ahmed maher
		</div>
	);
};

export default Footer;
