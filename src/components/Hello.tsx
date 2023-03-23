import React from "react";
import { CurrentTime } from "./CurrentTime";

import styles from "./hello.module.css";

export const Hello: React.FC = () => {
  return (
    <div className={styles.hello}>
      <h1 className={styles.hello__heading}>Maz Hermon tech test starter</h1>
      <p>hello 😄</p>
      <CurrentTime />
    </div>
  );
};
