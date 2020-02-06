import React, { Component } from 'react';
import ItemDisplay from '../../components/ItemDisplay/ItemDisplay';
import styles from './Index.module.css';

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
   }
  }

  render() {
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
  }
}


