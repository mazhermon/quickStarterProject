import React from 'react'

import { Hello } from 'components/hello'
import styles from './app.module.css'

const App: React.FC = () => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Hello />
      </header>
      <section className={styles.copy}></section>
    </main>
  )
}

export default App
