import React, { Component } from 'react';
import firebase from '../../config/firebase';
import { Link } from 'react-router-dom';
import styles from './EditItem.module.css';
import ItemImage from '../../components/ItemDisplay/ItemImage/ItemImage';

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      title: '',
      price: '',
      available: '',
      description: '',
      time: '',
      downloadURLs: [],
      filenames: [],
    };
  }

  //TODO - Create edit image function

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection('items')
      .doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        const item = doc.data();
        this.setState({
          key: doc.id,
          title: item.title,
          price: item.price,
          available: item.available,
          description: item.description,
          time: item.time,
          downloadURLs: item.downloadURLs,
          filenames: item.filenames,
          // names: doc.data().filenames
        });
        console.log(this.state.key);
      } else {
        console.log('Document does not exist');
      }
    });
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ item: state });
  };

  handleSubmit = e => {
    e.preventDefault();

    const {
      title,
      price,
      available,
      description,
      time,
      downloadURLs,
      filenames,
    } = this.state;

    const updateRef = firebase
      .firestore()
      .collection('items')
      .doc(this.state.key);
    updateRef
      .set({
        title,
        price,
        available,
        description,
        time,
        downloadURLs,
        filenames,
      })
      .then(docRef => {
        this.setState({
          title: '',
          price: '',
          available: '',
          description: '',
          time: '',
          downloadURLs: [],
          filenames: [],
        });
        this.props.history.push(`/item/${this.props.match.params.id}`);
      })
      .catch(err => {
        console.error('Error with item edit', err);
      });
  };

  render() {
    const images = this.state.downloadURLs.map((url, i) => {
      return <ItemImage key={i} url={url} />;
    });
    return (
      <div className={styles.container}>
        <div className={styles.infoWrap}>
          <h1>
            Edit item <p>{this.title}</p>
          </h1>
          <Link to={`/item/${this.state.key}`}>Go back</Link>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">item title</label>
            <input
              type="text"
              placeholder="Enter a title here.."
              value={this.state.title}
              name="title"
              onChange={this.onChange}
            />
            <br />
            <label htmlFor="price">item price</label>
            <input
              name="price"
              type="text"
              placeholder="Enter a price here.."
              value={this.state.price}
              onChange={this.onChange}
            />
            <br />
            <label htmlFor="available">Number of tickets</label>
            <input
              name="available"
              type="text"
              placeholder="Enter a amount here.."
              value={this.state.available}
              onChange={this.onChange}
            />
            <br />
            <label htmlFor="time">Select time</label>
            <input
              name="time"
              type="date"
              placeholder="Enter a time here.."
              value={this.state.time}
              onChange={this.onChange}
            />
            <br />
            <label htmlFor="description">Item description</label>
            <textarea
              name="description"
              placeholder="Enter a description here.."
              value={this.state.description}
              onChange={this.onChange}
            />
            <br />
            <input type="submit" value="submit item" />
          </form>
        </div>
        <div className={styles.imgContainer}>{images}</div>
      </div>
    );
  }
}

export default EditItem;
