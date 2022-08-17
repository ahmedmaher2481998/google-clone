import React from "react";
import User from "./User";

const Header = () => {
	return (
		<>
			<div className='flex  justify-between p-5'>
				<div className='flex space-x-4 justify-center items-center'>
					<p className='link'>About</p>
					<p className='link'>Store</p>
				</div>
				<div className='flex space-x-4 justify-center items-center'>
					<p className='link'>Gmail</p>
					<p className='link'>Images</p>
					<User />
				</div>
			</div>
		</>
	);
};

export default Header;
