import { CurrentTime } from './CurrentTime';

import styles from './hello.module.css';
import React from 'react';

export const Hello: React.FC = () => {
  return (
    <div className={styles.hello}>
      <h1 className={styles.hello__heading}>Maz Hermon tech test starter</h1>
      <p>hello Atlassian 😄</p>

      <CurrentTime />
    </div>
  );
};
