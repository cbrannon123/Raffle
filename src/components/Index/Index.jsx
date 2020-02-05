import React from 'react';
import ItemDisplay from '../ItemDisplay/ItemDisplay';
import styles from './Index.module.css';

export const Index = () => {
  return (
    <div className={styles.indexContainer}>
      <ItemDisplay />
      <ItemDisplay />
      <ItemDisplay />
      <ItemDisplay />
      <ItemDisplay />
      <ItemDisplay />
    </div>
  );
};
