import React, { Component } from 'react';
import Item from '../../components/ItemDisplay/ItemDisplay';
import ItemShow from '../../components/ItemShow/ItemShow';

class Show extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <ItemShow props={this.props.img} />
      </div>
    );
  }
}

export default Show;
