import React from "react";
import User from "./User";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
	const router = useRouter;
	return (
		<>
			<div className='flex  justify-between p-5'>
				<div className='flex space-x-4 justify-center items-center'>
					<Link href='https://about.google/'>
						<a className='link_header'>About</a>
					</Link>
					<Link href='https://store.google.com'>
						<a className='link_header'>Store</a>
					</Link>
				</div>
				<div className='flex space-x-4 justify-center items-center'>
					<Link href={"https://gmail.com"}>
						<a className='link_header'>Gmail</a>
					</Link>
					<Link href={`/search?q=${router.query?.q || "memes"}&category=image`}>
						<a className='link_header'>Images</a>
					</Link>
					<User />
				</div>
			</div>
		</>
	);
};

export default Header;
