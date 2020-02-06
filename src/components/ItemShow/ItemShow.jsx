import React, { Component } from 'react';
import styles from './ItemShow.module.css';

class ItemShow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>{this.props.img}</div>
      </div>
    );
  }
}

export default ItemShow;
