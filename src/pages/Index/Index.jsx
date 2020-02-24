import React, { Component } from 'react';
import ItemDisplay from '../../components/ItemDisplay/ItemDisplay';
import styles from './Index.module.css';
import firebase from '../../config/firebase';

export class Index extends Component {
  constructor(props) {
    super(props);
    
    console.log(this.props);
    this.ref = firebase.firestore().collection('items');
    this.unsubscribe = null;
    this.state = {
      items: [],
    };
  }

  onCollectionUpdate = querySnapshot => {
    const items = [];
    querySnapshot.forEach(doc => {
      const { title, description, available, price, time, downloadURLs } = doc.data();
      items.push({
        key: doc.id,
        doc,
        title,
        description,
        price,
        available,
        time,
        downloadURLs
      });
      this.setState({
        items,
      });
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    console.log(this.unsubscribe);
  }

  componentWillUnmount() {
    console.log('Hello from unmount');
    this.unsubscribe = this.ref.onSnapshot(this.unsubscribe);
  }

  render() {
    const items = this.state.items.map(item => {
      return (
        <ItemDisplay
          key={item.doc.id}
          id={item.doc.id}
          title={item.title}
          price={item.price}
          avail={item.available}
          body={item.description}
          time={item.time}
          url={item.downloadURLs}
        />
      );
    });
    return <div className={styles.indexContainer}>{items}</div>;
  }
}
