import React, { Component } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: -1;
`;

const Message = styled.div`
  min-width: 100px;
  border-radius: 6px;
  font-size: 22px;
  background-color: rgba(107, 107, 107, 0.7);
  color: #ffffff;
  padding: 18px 32px 15px 31px;
  margin-bottom: 10px;
  animation: fade-out 1500ms 1500ms;

  @keyframes fade-out {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;

class Toast extends Component {
  state = {
    message: '',
    timer: null,
  };

  componentWillUnmount() {
    const { hideMessage } = this;
    hideMessage();
    console.log('test');
  }

  showMessage = (_message) => {
    const { hideMessage } = this;
    this.setState({
      message: _message,
      timer: setTimeout(() => {
        hideMessage();
      }, 3000),
    });
  };

  hideMessage = () => {
    const { timer } = this.state;
    timer && clearTimeout(timer);
    this.setState({ message: '', timer: null });
  };

  render() {
    const { message } = this.state;
    return <Wrapper>{message !== '' && <Message>{message}</Message>}</Wrapper>;
  }
}

export default Toast;
