import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import media from 'util/media';

const Wrapper = styled.div`
  ${media.wrapper}
`;

const Box = styled.div`
  display: flex;
  ${media.mobile`
    justify-content: space-between;
  `}

  ${media.tablet`
    justify-content: flex-start;
  `}

  ${media.desktop`
    justify-content: flex-start;
  `}

  ${media.box}
`;

const TabNavigator = ({ children }) => {
  return (
    <Wrapper>
      <Box>{children}</Box>
    </Wrapper>
  );
};

TabNavigator.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default TabNavigator;
