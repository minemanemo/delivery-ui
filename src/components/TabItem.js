import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const Wrapper = styled.div`
  font-size: 20px;
  color: #999999;
  padding: 0 4px 8px 4px;
  text-decoration: none;

  ${(props) =>
    props.selected
      ? `color: #3e3e3e;
         border-bottom: 4px solid #3e3e3e;`
      : ''}

  :hover {
    color: #3e3e3e;
  }

  :not(:last-child) {
    margin-right: 7px;
  }

  @media all and (min-width: 768px) and (max-width: 1024px) {
    margin-right: 27px;
  }

  @media all and (min-width: 1025px) {
    margin-right: 27px;
  }
`;

const TabItem = ({ children, path }) => {
  const location = useLocation();
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <Wrapper selected={location.pathname.indexOf(path) >= 0}>
        {children}
      </Wrapper>
    </Link>
  );
};

TabItem.propTypes = {
  children: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

TabItem.defaultProps = {};

export default TabItem;
