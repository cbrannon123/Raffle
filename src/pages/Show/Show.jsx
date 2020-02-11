import React, { Component } from 'react';
import Item from '../../components/ItemDisplay/ItemDisplay';
import ItemShow from '../../components/ItemShow/ItemShow';
import { database, getItem } from '../../config/firebase';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '' ,
      title: '',
      price: '',
      available:'' ,
      body: '',
      time: '',
    };
  }

  

  componentDidMount() {
    
    
  }

  render() {
    return <div>
      <h2>{this.state.title}</h2>
      <br />
      <p>{this.state.body}</p>
      <br />
      <p>{this.state.price}</p>
      <br />
      <p>{this.state.available}</p>
      <br />
      <p>{this.state.time}</p>
    </div>;
  }
}

export default Show;
