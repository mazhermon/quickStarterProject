import { Hype } from 'components/Hype';
import React from 'react';

import { CurrentTime } from '../CurrentTime';
import styles from './sayHi.module.css';

export const SayHi: React.FC = () => {
  return (
    <div className={styles.sayHi}>
      <div className={styles.sayHi__content}>
        <div className={styles.sayHi__authorInfo}>
          <h1 className={styles.sayHi__heading}>Maz Hermon</h1>
          <p className={styles.sayHi__subTitle}>
            Front&#45;end developer tech test <br /> starting point
          </p>
          <CurrentTime />
        </div>
        <Hype />
      </div>
    </div>
  );
};
