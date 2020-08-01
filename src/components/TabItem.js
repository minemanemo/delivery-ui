import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import media from 'util/media';

const Wrapper = styled.div`
  font-size: 20px;
  color: #999999;
  padding: 0 4px 8px 4px;

  ${(props) =>
    props.selected
      ? `color: #3e3e3e;
         border-bottom: 4px solid #3e3e3e;`
      : ''}

  :hover {
    color: #3e3e3e;
  }

  ${media.tablet`
    margin-right: 27px;
  `}

  ${media.desktop`
    margin-right: 27px;
  `}
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

export default TabItem;
