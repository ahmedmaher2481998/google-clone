import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
const User = () => {
	const { data: session } = useSession();
	return (
		<div className='bg-blue-600 p-2 text-gray-300 rounded-md font-medium'>
			<button onClick={signIn}>Sing in</button>
		</div>
	);
};

export default User;
