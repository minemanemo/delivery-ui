import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BsExclamationCircle } from 'react-icons/bs';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d3d3d3;

  div {
    text-align: center;
    svg {
      font-size: 84px;
    }
    div {
      font-size: 22px;
      margin-top: 28px;
    }
  }
`;

const IconView = ({ icon, text }) => {
  return (
    <Wrapper>
      <div>
        {icon}
        <div>{text}</div>
      </div>
    </Wrapper>
  );
};
IconView.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
};
IconView.defaultProps = {
  icon: <BsExclamationCircle />,
  text: '등록된 배송지가 없습니다.',
};

export default IconView;
