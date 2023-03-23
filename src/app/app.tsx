import React from 'react';

import { SayHi } from 'components/SayHi';
import styles from './app.module.css';

const App: React.FC = () => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <SayHi />
      </header>
      <section className={styles.copy}></section>
    </main>
  );
};

export default App;
