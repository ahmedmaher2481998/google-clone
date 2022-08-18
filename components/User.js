import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
const User = ({ className }) => {
	const { data: session } = useSession();
	let a;
	if (session) {
		return (
			<>
				<img
					className='cursor-pointer w-10  h-10  rounded-full  hover:bg-slate-200 p-1'
					onClick={() => signOut()}
					src={session.user.image}
					alt='user image '
				/>
			</>
		);
	}
	return (
		<div
			className={`bg-blue-600 px-6 py-2 hover:cursor-pointer
		hover:bg-blue-500 hover:shadow-lg
		 text-white rounded-md font-medium whitespace-nowrap ${className}`}
		>
			<button onClick={signIn}>Sing in</button>
		</div>
	);
};

export default User;
