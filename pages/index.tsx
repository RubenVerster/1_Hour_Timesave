import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Boilerplate App</title>
        <meta name='description' content='A boilerplate app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Next + TypeScript + TailwindCSS</h1>

        <div>Boilerplate app for faster development. Maybe look into Redwood as well</div>
      </main>

      <footer>
        <a href='https://rubenverster.com' target='_blank' rel='noopener noreferrer'>
          Ruben Verster
        </a>
      </footer>
    </div>
  );
};

export default Home;
