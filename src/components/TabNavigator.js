import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media all and (min-width: 768px) and (max-width: 1024px) {
    justify-content: flex-start;
  }

  @media all and (min-width: 1025px) {
    justify-content: flex-start;
  }
`;

const TabNavigator = ({ children }) => <Wrapper>{children}</Wrapper>;

TabNavigator.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default TabNavigator;
