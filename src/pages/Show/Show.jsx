import React, { Component } from 'react';
import firebase from '../../config/firebase';
import { Link } from 'react-router-dom';
import styles from './Show.module.css';
import ItemImage from '../../components/ItemDisplay/ItemImage/ItemImage';

class Show extends Component {
  constructor(props) {
    super(props);
    this.unmount = null;
    this.state = {
      item: {},
      url: [],
      key: '',
      //
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection('items')
      .doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.setState({
          item: doc.data(),
          key: doc.id,
          url: doc.data().downloadURLs,
          isLoading: false,
        });
      } else {
        console.log('Document does not exists.');
      }
    });
  }

  delete(id) {
    firebase
      .firestore()
      .collection('items')
      .doc(id)
      .delete()
      .then(() => {
        this.props.history.push('/');
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div style={{ display: 'flex' }}>
            <ItemImage url={this.state.url[0]} />
            <ItemImage url={this.state.url[1]} />
          </div>
          <h3>title</h3>
          <h2>{this.state.item.title}</h2>
          <br />
          <h3>description</h3>
          <p>{this.state.item.description}</p>
          <br />
          <h3>price</h3>
          <p>{this.state.item.price}</p>
          <br />
          <h3>amount</h3>
          <p>{this.state.item.available}</p>
          <br />
          <h3>time</h3>
          <p>{this.state.item.time}</p>
          {this.props.isAdmin == true ? (
            <div>
              <Link to={`/edit/${this.state.key}`}>Edit</Link>
              <button onClick={this.delete.bind(this, this.state.key)}>
                Delete{' '}
              </button>
            </div>
          ) : (
            <p>piss</p>
          )}
        </div>
      </div>
    );
  }
}

export default Show;
