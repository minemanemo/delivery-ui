import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import media from 'util/media';

import { AddressItem, MoreItem } from 'components/AddressItem';

const Wrapper = styled.div`
  ${media.mobile`
    border-top: 1px solid #8c8c8c;
    border-bottom: 1px solid #8c8c8c;
  `}
  ${media.tablet`
    border: 1px solid #979797;
    border-radius: 8px;
  `}
  ${media.desktop`
    border: 1px solid #979797;
    border-radius: 8px;
  `}
`;

const CreateListItem = (list, base) => {
  return list.map((item) => {
    const { id, postnumber, address } = item;
    // const { name } = item;
    return (
      <AddressItem
        key={id}
        postnumber={postnumber}
        address={address}
        isbase={id === base}
      />
    );
  });
};

const AddressList = ({ addresses, base, more, onCLickMoreBtn }) => {
  const first = addresses.find((address) => address.id === base);
  const least = addresses.filter((address) => address.id !== base);

  return (
    <Wrapper>
      {CreateListItem([first, ...least.slice(0, more * 5 - 1)], base)}
      {more * 5 - 1 <= addresses.length && (
        <MoreItem title="더보기" onCLickMoreBtn={onCLickMoreBtn} />
      )}
    </Wrapper>
  );
};
AddressList.propTypes = {
  addresses: PropTypes.arrayOf(PropTypes.object),
  base: PropTypes.number.isRequired,
  more: PropTypes.number.isRequired,
  onCLickMoreBtn: PropTypes.func.isRequired,
};
AddressList.defaultProps = {
  addresses: [],
};

export default AddressList;
