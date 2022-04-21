import Head from 'next/head';
import Introduction from '../components/Introduction/Introduction';
import MyServices from '../components/MyServices/MyServices';
import AboutMe from '../components/AboutMe/AboutMe';
import MyWork from '../components/MyWork/MyWork';

export default function Home() {
	return (
		<>
			<Introduction />
			<MyServices />
			<AboutMe />
			<MyWork/>
		</>
	);
}
