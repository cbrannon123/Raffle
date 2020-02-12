import React, { Component } from 'react';
import ReactDom from 'react-dom';
import firebase from '../../config/firebase';
import { Link } from 'react-router-dom';

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
    };
  }

  componentDidMount() {
    const ref = firebase
    .firestore()
    .collection('items')
    .doc(this.props.match.params.id);
    ref.get().then(doc => {
      console.log('hit from edit')
      if (doc.exists) {
        const item = doc.data();
        this.setState({
          key: doc.id,
          title: item.title,
          price: item.price,
          available: item.available,
          description: item.description,
          time: item.time,
        });
      } else {
        console.log('Document does not exist');
      }
    });
  }

  onChange = e => {
    const state = this.state;

    state[e.target.name] = e.target.value;
    //could cause error
    this.setState( state );
  };

  handleSubmit = e => {
    e.preventDefault();

    const { title, price, available, description, time } = this.state;

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
      })
      .then(docRef => {
        this.setState({
          title: '',
          price: '',
          available: '',
          description: '',
          time: '',
        });
        this.props.history.push(`/item/${this.props.match.params.id}`);
      })
      .catch(err => {
        console.error('Error with item edit', err);
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
          <h1>Edit item <p>{this.title}</p></h1>
          <Link to={`/item/${this.state.key}`}>Go back</Link>
          <hr />
          <form onSubmit={this.handlSubmit}>
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
          {/* <br />
          <label>Upload img</label>
          <input
            type="file"
            placeholder="Enter a discription here.."
            onChange={this.handleImg}
          /> */}
        </div>
      </div>
    );
  }
}

export default EditItem;
