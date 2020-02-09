import React, { Component } from 'react';
import styles from './CreateItem.module.css';

class CreateItem extends Component {
  constructor(props) {
    super(props);
    //this.handlSubmit = this.handlSubmit.bind(this);
    this.state = {
      id: '',
      title: '',
      price: '',
      available: '',
      body: '',
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

  handleBody = e => {
    this.setState({
      body: e.target.value,
    });
  };

  handlSubmit = e => {
    e.preventDefault();
    this.props.addItem(
      this.state.title,
      this.state.price,
      this.state.available,
      this.state.body,
      this.state.id
    );

    this.setState({
      id: '',
      title: '',
      price: '',
      available: '',
      body: '',
    });
  };

  render() {
    return (
      <div
        style={{
          width: '50vh',
          marginTop: '10px',
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
            <input type="submit" value="submit item" />
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
