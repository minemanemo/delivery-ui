import React from 'react';
import styled from 'styled-components';
import IconView from 'components/Base/IconView';
import media from 'util/media';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;

  ${media.mobile`
    height: 320px;
  `}
  ${media.tablet`
    width: 660px;
    height: 320px;
  `}
  ${media.desktop`
    width: 660px;
    height: 320px;
  `}
`;

const NoDataBox = () => {
  return (
    <Wrapper>
      <IconView />
    </Wrapper>
  );
};

export default NoDataBox;
