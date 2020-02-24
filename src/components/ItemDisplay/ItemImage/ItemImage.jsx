import React, { Component } from 'react';
import styles from './ItemImage.module.css';


class ItemImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.imageContainer}>
        <img src={this.props.url} />
      </div>
    );
  }
}

export default ItemImage;
