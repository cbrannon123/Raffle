import React, { Component } from 'react';
import styles from './Entries.module.css';

class Entries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
    };
  }

  handleEntries = () => {
    if (this.state.names.length <= this.props.tickets - 1) {
      this.setState({
        name: this.state.names.push('name'),
      })
      } else {
        return
      }
      
  };

  render() {
    console.log(this.state.names);

    let entry = this.state.names.map((name, i) => {
      return <li key={i}>{name}</li>;
    });

    return (
      <div className={styles.container}>
        <div className={styles.names}>
          <ol>{entry}</ol>
        </div>
        <div className={styles.buttonWrapper}>
          <button onClick={this.handleEntries}>PayPal-PlaceHolder</button>
        </div>
      </div>
    );
  }
}

export default Entries;
