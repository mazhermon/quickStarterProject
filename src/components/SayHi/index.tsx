import React from 'react';

import { CurrentTime } from '../CurrentTime';
import styles from './sayHi.module.css';

export const SayHi: React.FC = () => {
  return (
    <div className={styles.sayHi}>
      <h1 className={styles.sayHi__heading}>Maz Hermon tech test starter</h1>
      <p>hello 😄</p>

      <CurrentTime />
    </div>
  );
};
