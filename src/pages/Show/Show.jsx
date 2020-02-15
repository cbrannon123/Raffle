import React, { Component } from 'react';
import firebase from '../../config/firebase';
import { Link } from 'react-router-dom';
import styles from './Show.module.css';

class Show extends Component {
  constructor(props) {
    super(props);
    this.unmount = null;
    this.state = {
      item: {},
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
        console.log('success');
        this.props.history.push('/');
      })
      .catch(err => {
        console.log('error with delete');
      });
  }
  

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
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
          {/* edit link */}
          <Link to={`/edit/${this.state.key}`}>Edit</Link>
          <button onClick={this.delete.bind(this, this.state.key)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Show;
