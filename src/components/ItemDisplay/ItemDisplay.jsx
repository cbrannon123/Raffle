import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ItemDisplay.module.css';
import ItemImage from './ItemImage/ItemImage';
import ItemInfo from '../ItemDisplay/ItemInfo/ItemInfo';
import firebase from '../../config/firebase';

const ItemDisplay = props => (
  <div className={styles.displayContainer}>
    <ItemImage src={props.imgSrc} />
    
    <ItemInfo
      title={props.title}
      price={props.price}
      available={props.avail}
      time={props.time}
    />
    {firebase.auth().currentUser ? ( 
    <Link className={styles.showButton} to={`/item/${props.id}`}>
      view
    </Link>
    ) : (
        <p>Login to view</p>
    )} 
  </div>
);

export default ItemDisplay;
