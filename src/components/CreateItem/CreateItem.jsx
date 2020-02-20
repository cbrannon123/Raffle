import React, { Component } from 'react';
import firebase from '../../config/firebase';
import { Link } from 'react-router-dom';
import styles from './CreateItem.module.css';
import FileUploader from 'react-firebase-file-uploader';

class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('items');
    this.state = {
      title: '',
      price: '',
      available: '',
      description: '',
      time: '',
      filenames: [],
      downloadURLs: [],
      uploadProgress: 0,
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleSubmit = e => {
    e.preventDefault();

    const { title, price, description, available, time } = this.state;

    this.ref
      .add({
        title,
        description,
        price,
        time,
        available,
      })
      .then(docRef => {
        this.setState({
          title: '',
          price: '',
          available: '',
          description: '',
          time: '',
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.error('Error on submit', err);
      });
  };

  render() {
    return (
      <div
        style={{
          width: '50vh',
          marginTop: '100px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <h1>Enter item</h1>
          <Link to="/">Go back</Link>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">item title</label>
            <input
              type="text"
              placeholder="Enter a title here.."
              value={this.title}
              name="title"
              onChange={this.onChange}
            />
            <br />
            <label htmlFor="price">item price</label>
            <input
              name="price"
              type="text"
              placeholder="Enter a price here.."
              value={this.price}
              onChange={this.onChange}
            />
            <br />
            <label htmlFor="available">Number of tickets</label>
            <input
              name="available"
              type="text"
              placeholder="Enter a amount here.."
              value={this.available}
              onChange={this.onChange}
            />
            <br />
            <label htmlFor="time">Select time</label>
            <input
              name="time"
              type="text"
              placeholder="Enter a time here.."
              value={this.time}
              onChange={this.onChange}
            />
            <br />
            <label htmlFor="description">Item description</label>
            <textarea
              name="description"
              placeholder="Enter a description here.."
              value={this.body}
              onChange={this.onChange}
            />
            <br />
            <input type="submit" value="submit item" />
          </form>
          <FileUploader
            accept="image/*"
            name="image-uploader-multiple"
            randomizeFilename
            storageRef={firebase.storage().ref('images')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
            multiple
          />
        </div>
      </div>
    );
  }
}

export default CreateItem;
