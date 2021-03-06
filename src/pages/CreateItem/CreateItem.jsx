import React, { Component } from 'react';
import firebase from '../../config/firebase';
import { Link } from 'react-router-dom';
import styles from './CreateItem.module.css';
import FileUploader from 'react-firebase-file-uploader';
import ItemImage from '../../components/ItemDisplay/ItemImage/ItemImage';

class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('items');
    this.state = {
      title: '',
      price: '',
      available: '',
      description: '',
      time: Date,
      filenames: [],
      downloadURLs: [],
      uploadProgress: 0,
      isUploading: false,
    };
  }

  handleUploadStart = () =>
    this.setState({
      isUploading: true,
      uploadProgress: 0,
    });

  handleProgress = progress =>
    this.setState({
      uploadProgress: progress,
    });

  handleUploadError = error => {
    this.setState({
      isUploading: false,
    });
    console.error(error);
  };

  handleUploadSuccess = async filename => {
    const downloadURL = await firebase
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL();

    this.setState(oldState => ({
      filenames: [...oldState.filenames, filename],
      downloadURLs: [...oldState.downloadURLs, downloadURL],
      uploadProgress: 100,
      isUploading: false,
    }));
  };

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleSubmit = e => {
    e.preventDefault();

    const {
      title,
      price,
      description,
      available,
      time,
      downloadURLs,
      filenames,
    } = this.state;
    if (filenames.length === 0) {
      return alert('add pictures');
    }
    this.ref
      .add({
        title,
        description,
        price,
        time,
        available,
        downloadURLs,
        filenames,
      })
      .then(docRef => {
        this.setState({
          title: '',
          price: '',
          available: '',
          description: '',
          time: Date,
          downloadURLs: [],
          filenames: [],
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.error('Error on submit', err);
      });
  };

  render() {
    return (
      <div className={styles.container1}>
        <div className={styles.wrapper}>
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
              type="date"
              required="true"
              placeholder="Enter a time here.."
              value={ this.state.time}
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
          <p>Progress: {this.state.uploadProgress}</p>
          <p>filenames: {this.state.filenames.join(', ')}</p>
          <div style={{ display: 'flex', alignContent: 'center' }}>
            <div style={{ display: 'flex',flexFlow: 'column', justifySelf: 'center' }}>
              {this.state.downloadURLs.map((downloadURL, i) => {
                return <ItemImage key={i} url={downloadURL} />;
              })}
            </div>
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
      </div>
    );
  }
}

export default CreateItem;
