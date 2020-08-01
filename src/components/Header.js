import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import media from 'util/media';

const Wrapper = styled.div`
  ${media.wrapper}
`;
const Box = styled.div`
  ${media.box}

  padding-bottom: 60px;
  margin-top: 26px;
`;

const Title = styled.div`
  font-size: 36px;
  color: #000000;
  font-weight: bold;
`;

const Header = ({ title }) => {
  return (
    <Wrapper>
      <Box>
        <Title>{title}</Title>
      </Box>
    </Wrapper>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
