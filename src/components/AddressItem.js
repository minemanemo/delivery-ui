import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import media from 'util/media';
import { MdMoreHoriz } from 'react-icons/md';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  :not(:last-child) {
    border-bottom: 1px solid #979797;
  }

  ${media.desktop`
    width: 620px;
  `}

  ${(props) =>
    props.more
      ? `
        font-size: 16px;
        color: #252525;
        justify-content: center;
        cursor: pointer;
  `
      : ''}
`;

const Information = styled.div`
  flex: 1;
`;

const PostNumber = styled.div`
  margin-bottom: 6px;
  font-size: 16px;
  color: #3e3e3e;
  display: flex;
  align-items: center;
  ${(props) =>
    props.isbase
      ? `::after {
        content: '기본';
        margin-left: 5px;
        width: 45.9px;
        height: 22px;
        background-color: #ff5b5c;
        border-radius: 5px;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  `
      : ''}
`;
const Address = styled.div`
  font-size: 14px;
  color: #989898;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 26px;
    cursor: pointer;
    border: 1px solid #e1e1e1;
    border-radius: 15px;
  }
`;

const MoreItem = ({ title, onCLickMoreBtn }) => {
  return (
    <Wrapper more onClick={onCLickMoreBtn}>
      {title}
    </Wrapper>
  );
};
MoreItem.propTypes = {
  title: PropTypes.string.isRequired,
  onCLickMoreBtn: PropTypes.func,
};
MoreItem.defaultProps = {
  onCLickMoreBtn: () => console.warn('more button click is not develop'),
};

const AddressItem = ({ postnumber, address, isbase }) => {
  return (
    <Wrapper>
      <Information>
        <PostNumber isbase={isbase}>{postnumber}</PostNumber>
        <Address>{address}</Address>
      </Information>
      <Menu>
        <MdMoreHoriz />
      </Menu>
    </Wrapper>
  );
};
AddressItem.propTypes = {
  postnumber: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  isbase: PropTypes.bool.isRequired,
};

export { AddressItem, MoreItem };
