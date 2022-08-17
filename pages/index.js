import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Google</title>
				<meta name='description' content='Google Search Engine ' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
		</div>
	);
}
