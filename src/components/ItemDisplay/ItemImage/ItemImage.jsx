import React, { Component } from 'react';
import styles from './ItemImage.module.css';

class ItemImage extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log('cliked');
  };

  render() {
    return (
      <div className={styles.imageContainer}>
        <img
          onClick={this.handleShowDialog}
          src={this.props.url}
          alt={'no image'}
        />
        {this.state.isOpen && (
          <dialog
            className={styles.dialog}
            style={{ position: 'absolute' }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              src={this.props.url}
              onClick={this.handleShowDialog}
              alt="no image"
            />
          </dialog>
        )}
      </div>
    );
  }
}

export default ItemImage;
