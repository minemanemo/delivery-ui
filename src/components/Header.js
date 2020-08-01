import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DivisionLine = styled.div`
  border-bottom: 1px solid #cecece;
`;

const Wrapper = styled.div`
  /* Mobile */
  width: 315px;
  margin-top: 26px;
  margin-left: 28px;

  /* Tablet */
  @media all and (min-width: 768px) and (max-width: 1024px) {
    width: 684px;
    margin-top: 26px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Desktop */
  @media all and (min-width: 1025px) {
    width: 684px;
    margin-top: 50px;
    margin-left: 42px;
  }
`;

const Title = styled.div`
  font-size: 36px;
  color: #000000;
  font-weight: bold;
  padding-bottom: 60px;
`;

const Header = ({ title, children }) => {
  return (
    <DivisionLine>
      <Wrapper>
        <Title>{title}</Title>
        {children}
      </Wrapper>
    </DivisionLine>
  );
};
Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
Header.defaultProps = {
  title: '설정',
};

export default Header;
