import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ItemDisplay.module.css';
import ItemImage from './ItemImage/ItemImage';
import ItemInfo from '../ItemDisplay/ItemInfo/ItemInfo';
import firebase from '../../config/firebase';

class ItemDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.displayContainer}>
        <span className={ styles.cover}></span>
        <ItemImage url={this.props.url[0]} />
        <ItemInfo
          title={this.props.title}
          price={this.props.price}
          available={this.props.avail}
          time={this.props.time}
        />
        {firebase.auth().currentUser ? (
          <Link className={styles.showButton} to={`/item/${this.props.id}`}>
            view
          </Link>
        ) : (
          <p>Login to view</p>
        )}
      </div>
    );
  }
}

export default ItemDisplay;
