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
      urls: [],
      names: [],
      key: '',
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const ref = firebase
      .firestore()
      .collection('items')
      .doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.setState({
          item: doc.data(),
          key: doc.id,
          urls: doc.data().downloadURLs,
          names: doc.data().filenames,
          isLoading: false,
        });
      } else {
        console.log('Document does not exists.');
      }
    });
  }


  delete(id) {
    const string = this.state.names.map(name => {
      return name;
    });
    var ref1 = () =>
      string.forEach(i => {
        return firebase
          .storage()
          .ref('images/')
          .child(`${i}`)
          .delete();
      });
    ref1();
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
    const images = this.state.urls.map((url, i) => {
      return <ItemImage onClick={this.handleShowDialog} key={i} url={url} />;
    });
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h3>title</h3>
            <h2>{this.state.item.title}</h2>
          </div>
          <div className={styles.images}>{images}</div>
          <div className={styles.info}>
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
          </div>
          {this.props.isAdmin === true ? (
            <div>
              <Link to={`/edit/${this.state.key}`}>Edit</Link>
              <button onClick={this.delete.bind(this, this.state.key)}>
                Delete{' '}
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default Show;
