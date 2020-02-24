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
      uploadProgress: progress
    });
  
  handleUploadError = error => {
    this.setState({
      isUploading: false
    });
    console.error(error)
  }

  handleUploadSuccess = async filename => {
    const downloadURL = await firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL();
    
    this.setState(oldState => ({
      filenames: [...oldState.filenames, filename],
      downloadURLs: [...oldState.downloadURLs, downloadURL],
      uploadProgress: 100,
      isUploading: false
    }))
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleSubmit = e => {
    e.preventDefault();

    const { title, price, description, available, time, downloadURLs } = this.state;

    this.ref
      .add({
        title,
        description,
        price,
        time,
        available,
        downloadURLs
      })
      .then(docRef => {
        this.setState({
          title: '',
          price: '',
          available: '',
          description: '',
          time: '',
          downloadURLs: []
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
          <p>Progress: {this.state.uploadProgress}</p>
          <p>filenames: {this.state.filenames.join(", ")}</p>
          <div style={{display: 'flex'}}>
            {this.state.downloadURLs.map((downloadURL, i) => {
              return <img key={i} src={downloadURL} />
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
    );
  }
}

export default CreateItem;
