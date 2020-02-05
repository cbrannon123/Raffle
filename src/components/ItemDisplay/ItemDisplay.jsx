import React, { Component } from 'react';
import styles from './ItemDisplay.module.css';
import ItemImage from './ItemImage/ItemImage';
import ItemInfo from '../ItemDisplay/ItemInfo/ItemInfo';

class ItemDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'this title',
      price: '$12.00',
      available: 4,
      time: 12 + ' ' + 'hrs',
      img: ''
    };
  }

  render() {
    return (
      <div className={styles.displayContainer}>
        <ItemImage />
        <ItemInfo
          title={this.state.title}
          price={this.state.price}
          available={this.state.available}
          time={this.state.time}
        />
        <button className={styles.showButton}>View</button>
      </div>
    );
  }
}

export default ItemDisplay;
