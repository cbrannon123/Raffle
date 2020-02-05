import React, { Component } from 'react';
import styles from './ItemDisplay.module.css';
import ItemImage from './ItemImage/ItemImage';
import ItemInfo from '../ItemDisplay/ItemInfo/ItemInfo';

class ItemDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.displayContainer}>
        <ItemImage />
        <ItemInfo />
        <button>View</button>
      </div>
    );
  }
}

export default ItemDisplay;
