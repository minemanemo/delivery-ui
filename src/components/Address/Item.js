import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import media from 'util/media';
import { MdMoreHoriz } from 'react-icons/md';

import AddressItemMenu from 'components/Address/ItemMenu';

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

const MenuBtn = styled.div`
  position: relative;
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
  onCLickMoreBtn: () => console.warn('[x] more button click'),
};

const AddressItem = ({
  id,
  name,
  postnumber,
  address,
  isbase,
  updateDefaultAddress,
  deleteAddress,
}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <Wrapper>
      <Information>
        <PostNumber isbase={isbase}>{postnumber}</PostNumber>
        <Address>{address}</Address>
      </Information>
      <MenuBtn>
        <MdMoreHoriz onClick={() => setMenuVisible(true)} />
        <AddressItemMenu
          id={id}
          name={name}
          visible={menuVisible}
          hideMenu={() => setMenuVisible(false)}
          updateAddress={updateDefaultAddress}
          deleteAddress={deleteAddress}
        />
      </MenuBtn>
    </Wrapper>
  );
};
AddressItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  postnumber: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  isbase: PropTypes.bool.isRequired,
  updateDefaultAddress: PropTypes.func.isRequired,
  deleteAddress: PropTypes.func.isRequired,
};

export { AddressItem, MoreItem };
