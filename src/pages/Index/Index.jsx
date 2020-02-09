import React, { Component } from 'react';
import ItemDisplay from '../../components/ItemDisplay/ItemDisplay';
import CreateItem from '../../components/CreateItem/CreateItem';
import styles from './Index.module.css';

import { database, createItem } from '../../config/firebase';

export class Index extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);

    this.state = {
      items: [
        // {
        //   id: '1',
        //   title: 'hello',
        //   price: '7',
        //   available: '10',
        //   body: 'this is the body',
        // },
        // {
        //   id: '2',
        //   title: 'hello',
        //   price: '7',
        //   available: '10',
        //   body: 'this is the body',
        // },
        // {
        //   id: '3',
        //   title: 'hello',
        //   price: '7',
        //   available: '10',
        //   body: 'this is the body',
        // },
      ],
      dbRef: null
    };
  }

  componentDidMount() {
    this.setState({
      dbRef: 'items/'
    }, this.showItems)
    
  }
  showItems = () => {
    database.ref(this.state.dbRef)
      .orderByChild('child_added')
      .on('value', snapshot => {
        const newArray = []
        snapshot.forEach(childSnapShot => {
          newArray.push({
            id: childSnapShot.key,
            ...childSnapShot.val()
          })
        })
        this.setState({ items: newArray })
    })
  }


  addItem(title, price, avail, body) {
    const { dbRef } = this.state
    createItem(dbRef, {
      title: title,
      price: price,
      available: avail,
      body: body,
    });
  }

  render() {
    const isAdmin = true;
    const items = this.state.items.map(item => {
      return (
        <ItemDisplay
          id={item.id}
          title={item.title}
          price={item.price}
          avail={item.available}
          body={item.body}
          key={item.id}
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
