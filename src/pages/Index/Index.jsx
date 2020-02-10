import React, { Component } from 'react';
import ItemDisplay from '../../components/ItemDisplay/ItemDisplay';
import CreateItem from '../../components/CreateItem/CreateItem';
import styles from './Index.module.css';

import { database, createItem, removeItem } from '../../config/firebase';

export class Index extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);

    this.state = {
      items: [],
      dbRef: null,
    };
  }

  handleDelete = itemId => {
    removeItem(this.state.dbRef, itemId);
  };

  showItems = () => {
    database
      .ref(this.state.dbRef)
      .orderByChild('child_added')
      .on('value', snap => {
        const newArray = [];
        snap.forEach(childSnapShot => {
          newArray.push({
            id: childSnapShot.key,
            ...childSnapShot.val(),
          });
        });
        this.setState({ items: newArray });
      });
  };

  addItem(title, price, avail, body, time) {
    const { dbRef } = this.state;
    createItem(dbRef, {
      title: title,
      price: price,
      available: avail,
      body: body,
      time: '12hrs'
    });
  }

  componentDidMount() {
    this.setState(
      {
        dbRef: 'items/',
      },
      this.showItems,
    );
  }

  render() {
    const isAdmin = true;
    const items = this.state.items.map(item => {
      console.log(item.id);
      return (
        <ItemDisplay
          handleDelete={this.handleDelete}
          id={item.id}
          title={item.title}
          price={item.price}
          avail={item.available}
          body={item.body}
          key={item.id}
          time={item.time}
        />
      );
    });
    return (
      <div className={styles.indexContainer}>
        {isAdmin ? (
          <>
            <CreateItem addItem={this.addItem} />
            {items}
          </>
        ) : (
          <>{items}</>
        )}
      </div>
    );
  }
}
