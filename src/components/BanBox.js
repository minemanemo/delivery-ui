import React from 'react';
import { FaBan } from 'react-icons/fa';
import styled from 'styled-components';
import IconView from 'components/IconView';

const Wrapper = styled.div`
  min-width: 360px;
  min-height: 320px;
  display: flex;
  justify-content: center;
  align-item: center;
`;

const BanBox = () => {
  return (
    <Wrapper>
      <IconView icon={<FaBan />} text="개발 중 입니다." />
    </Wrapper>
  );
};

export default BanBox;
