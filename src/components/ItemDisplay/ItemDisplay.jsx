import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Show from '../../pages/Show/Show';
import styles from './ItemDisplay.module.css';
import ItemImage from './ItemImage/ItemImage';
import ItemInfo from '../ItemDisplay/ItemInfo/ItemInfo';

const ItemDisplay = props => (
  <div className={styles.displayContainer}>
    <button onClick={() => props.handleDelete(props.id)}>XXX </button>
    <ItemImage src={props.imgSrc} />
    <ItemInfo
      title={props.title}
      price={props.price}
      available={props.avail}
      time={props.time}
    />
    <button className={styles.showButton}>
      <Link to={'/show'}>View</Link>
    </button>
  </div>
);

export default ItemDisplay;
