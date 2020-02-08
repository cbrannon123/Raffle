import React, { Component } from 'react';
import ItemDisplay from '../../components/ItemDisplay/ItemDisplay';
import styles from './Index.module.css';
import CreateItem from '../../components/CreateItem/CreateItem';

export class Index extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.state = {
      items: [
        {
          id: '1',
          title: 'hello',
          price: '7',
          available: '10',
          body: 'this is the body',
        },
        {
          id: '2',
          title: 'hello',
          price: '7',
          available: '10',
          body: 'this is the body',
        },
        {
          id: '3',
          title: 'hello',
          price: '7',
          available: '10',
          body: 'this is the body',
        },
      ],
    };
  }

  addItem(title, price, avail, body) {
    const prevItem = this.state.items;
    prevItem.push({
      id: prevItem.length + 1,
      title: title,
      price: price,
      available: avail,
      body: body,
    });
    this.setState({
      items: prevItem,
    });
  }

  render() {
    const isAdmin = true
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
          <>
              {items}
              </>
          )}
      </div>
    );
  }
}
