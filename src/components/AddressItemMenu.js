import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';

const Menu = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid #cdcdcd;
  padding: 10px 0;
  box-shadow: 2px 2px 3px rgba(122, 122, 122, 0.5);
  top: 40px;
  right: 0;
  width: 168px;
  z-index: 5;
`;

const MenuItem = styled.div`
  font-size: 16px;
  color: #3e3e3e;
  padding: 11px 39.5px 10px 19.2px;
  cursor: pointer;
`;

class AddressItemMenu extends Component {
  handleClickOutside = (e) => {
    const { hideMenu } = this.props;
    hideMenu();
  };

  render() {
    const { visible, updateAddress, deleteAddress } = this.props;
    return (
      <>
        {visible && (
          <Menu>
            <MenuItem onClick={() => updateAddress()}>
              기본 배송지 설정
            </MenuItem>
            <MenuItem onClick={() => deleteAddress()}>삭제</MenuItem>
          </Menu>
        )}
      </>
    );
  }
}
AddressItemMenu.propTypes = {
  hideMenu: PropTypes.func,
  updateAddress: PropTypes.func,
  deleteAddress: PropTypes.func,
};
AddressItemMenu.defaultProps = {
  hideMenu: () => console.warn('[x] hide menu function'),
  updateAddress: () => console.warn('[x] change default address function'),
  deleteAddress: () => console.warn('[x] delete address'),
};

export default onClickOutside(AddressItemMenu);
