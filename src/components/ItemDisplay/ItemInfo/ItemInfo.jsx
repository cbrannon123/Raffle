import React, { Component } from 'react';
import styles from './ItemInfo.module.css';

class ItemInfo extends Component {
  constructor(props) {
    super(props);
    var today = new Date(),
    current = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.state = {
      currentDate: current
    }
  }
  

  render() {
   
  

    return (
      <div className={styles.itemInfoContainer}>
        <div className={styles.itemName}>
          <h2>{this.props.title}</h2>
        </div>
        <div className={styles.dataContainer}>
          <div className={styles.data}>
            <h5>Per Ticket</h5>
            <p>{this.props.price}</p>
          </div>
          <div className={styles.data}>
            <h5>Tickets</h5>
            <p>{this.props.available}</p>
          </div>
          <div className={styles.data}>
            <h5>Ends</h5>
            {this.props.time < this.state.currentDate ? <p>not</p> : <p>{this.props.time}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default ItemInfo;
