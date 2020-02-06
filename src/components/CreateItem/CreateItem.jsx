import React, { Component } from 'react';
import styles from './CreateItem.module.css';

class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: '',
      available: '',
      body: '',
      img: {
        file: null,
        src: '',
      },
      time: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  }

  handleTitle = e => {
    this.setState({
      title: e.target.value,
    });
  };

  handlePrice = e => {
    this.setState({
      price: e.target.value,
    });
  };

  handleAvail = e => {
    this.setState({
      available: e.target.value,
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
          <hr />
          <form onSubmit={this.handlSubmit}>
            <label>item title</label>
            <input
              placeholder="Enter a title here.."
              value={this.state.title}
              onChange={this.handleTitle}
            />
            <br />
            <label>item price</label>
            <input
              placeholder="Enter a price here.."
              value={this.state.price}
              onChange={this.handlePrice}
            />
            <br />
            <label>Number of tickets</label>
            <input
              placeholder="Enter a amount here.."
              value={this.state.available}
              onChange={this.handleAvail}
            />
            <br />
            <label>Select time</label>
            <input
              placeholder="Enter a time here.."
              value={this.state.time}
              onChange={this.handleTitle}
            />
            <br />
            <label>Item discription</label>
            <input
              placeholder="Enter a discription here.."
              value={this.state.body}
              onChange={this.handleBody}
            />
            <br />
          </form>
          <br />
          <label>Upload img</label>
          <input
            type="file"
            placeholder="Enter a discription here.."
            onChange={this.handleImg}
          />
        </div>
      </div>
    );
  }
}

export default CreateItem;
