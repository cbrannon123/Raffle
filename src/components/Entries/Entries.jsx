import React, { Component } from 'react';
import styles from './Entries.module.css';

const Entries = props => {
  return (
    <div className={styles.container}>
      <div className={styles.names}>
        <ol>
          <li>name</li>
          <li>name</li>
          <li>name</li>
          <li>name</li>
          <li>name</li>
          <li>name</li>
          <li>name</li>
          <li>name</li>
          <li>name</li>
          <li>name</li>
        </ol>
      </div>
      <div className={styles.buttonWrapper}>
        <button>PayPal-PlaceHolder</button>
      </div>
    </div>
  );
};

export default Entries;
