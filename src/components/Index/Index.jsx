import React, { Component } from 'react';
import ItemDisplay from '../ItemDisplay/ItemDisplay';
import styles from './Index.module.css';

export class Index extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div className={styles.indexContainer}>
        <ItemDisplay />
        <ItemDisplay />
        <ItemDisplay />
      </div>
    );
  }
}


