import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';

const Wrapper = styled.div`
  /* 레이아웃 */
  position: fixed;

  /* 화면 가운데 정렬 */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  /* 레이어 */
  z-index: ${(props) => (props.visible ? '10' : '-1')};

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

class Modal extends Component {
  handleKeyUp = (e) => {
    const { onHide } = this.props;
    // ESC key up
    if (e.keyCode === 27) {
      onHide();
    }
  };

  handleClickOutside = (e) => {
    const { onHide } = this.props;
    onHide();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.visible !== this.props.visible) {
      if (this.props.visible) {
        document.body.addEventListener('keyup', this.handleKeyUp);
      } else {
        document.body.removeEventListener('keyup', this.handleKeyUp);
      }
    }
  }

  render() {
    const { children, visible } = this.props;
    console.log(visible);
    return <Wrapper visible={visible}>{visible && children}</Wrapper>;
  }
}
Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default onClickOutside(Modal);
