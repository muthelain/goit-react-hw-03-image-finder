import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalStyled } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.modalClose();
    }
  };

  onClickModalClose = e => {
    if (e.target === e.currentTarget) {
      this.props.modalClose();
    }
  };

  render() {
    const { largeImg, tags } = this.props;
    return (
      <Overlay onClick={this.onClickModalClose}>
        <ModalStyled>
          <img src={largeImg} alt={tags} />
        </ModalStyled>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  modalClose: PropTypes.func.isRequired,
  largeImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
