import React, { Component } from 'react';
import styles from './ItemInfo.module.css';

class ItemInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.itemInfoContainer}>
        <div className={styles.itemName}>
          <h2>Product Title</h2>
        </div>
        <div className={styles.dataContainer}>
          <div className={styles.data}>
            <h5>Per Ticket</h5>
            <p>$12.00</p>
          </div>
          <div className={styles.data}>
            <h5>Tickets</h5>
            <p>$12</p>
          </div>
          <div className={styles.data}>
            <h5>Ends</h5>
            <p>12hrs</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemInfo;
