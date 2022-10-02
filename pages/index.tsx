import type { NextPage } from 'next';
import Head from 'next/head';

import React from 'react';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../store/home';

const Home: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Head>
        <title>NASA Tech Reports</title>
        <meta name='description' content='A boilerplate app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>WikiReplace</h1>

        <div>
          <div>
            <button aria-label='Increment value' onClick={() => dispatch(increment())}>
              Increment
            </button>
            <span>{count}</span>
            <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
              Decrement
            </button>
          </div>
        </div>
      </main>

      <footer>
        <a href='https://rubenverster.com' target='_blank' rel='noopener noreferrer'>
          &copy; Ruben Verster
        </a>
      </footer>
    </div>
  );
};

export default Home;
