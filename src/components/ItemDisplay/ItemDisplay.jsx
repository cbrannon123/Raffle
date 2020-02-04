import React, { Component } from 'react';
import styles from './ItemDisplay.module.css';
import ImageDisplay from '../ItemDisplay/ItemImage/ItemImage';

class ItemDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.displayContainer}>
        <ImageDisplay />
      </div>
    );
  }
}

export default ItemDisplay;
