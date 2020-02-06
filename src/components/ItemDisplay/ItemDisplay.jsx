import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Show from '../../pages/Show/Show';
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
      imgSrc:
        'https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg',
    };
  }

  render() {
    return (
      <div className={styles.displayContainer}>
        <ItemImage src={this.state.imgSrc} />
        <ItemInfo
          title={this.state.title}
          price={this.state.price}
          available={this.state.available}
          time={this.state.time}
        />
        <button className={styles.showButton}>
          <Link to={'/show'}>View</Link>
        </button>
      </div>
    );
  }
}

export default ItemDisplay;
