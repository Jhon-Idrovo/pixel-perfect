import Head from 'next/head';

import HeroImg from '../components/HeroImg';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Los Angeles Mountains</title>{" "}
        <meta name="description" content="lorem impsum" />
      </Head>
      <NavBar />
      <main>
        <section>
          <HeroImg />
        </section>
      </main>
    </>
  );
}
