import Head from 'next/head';
import Introduction from '../components/Introduction/Introduction';
import About from '../components/About/About';
import MyWork from '../components/MyWork/MyWork';

export default function Home() {
  return (
    <>
      <Head>
        <title>Michaela Pupikova |Front-End Dev</title>
        <meta
          name="keywords"
          content="web, development, programing, HTML, CSS, JavaScript, React, NextJS, Front End, Frontend, Developer"
        ></meta>
      </Head>
      <Introduction />
      <About />
      <MyWork />
    </>
  );
}
