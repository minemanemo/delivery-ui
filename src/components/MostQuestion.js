import React from 'react';
import styled from 'styled-components';
import media from 'util/media';

const Wrapper = styled.div`
  border: 1px solid #979797;
  border-radius: 8px;
  padding: 20px;

  ${media.mobile`
    margin: 30px 20px 71px 20px;
  `}
  ${media.tablet`
    margin: 30px auto 71px auto;
  `}
  ${media.desktop`
    width: 210px;
    margin: 0 auto auto auto;
  `}
`;

const Question = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: #3e3e3e;
  margin-bottom: 14px;
`;

const Answer = styled.div`
  font-size: 13px;
  line-height: 20px;
  color: #989898;
  a {
    color: #4ea3f8;
  }
  a:visited {
    color: #4ea3f8;
  }
`;

const MostQuestion = () => {
  return (
    <Wrapper>
      <Question>
        배송지를 삭제하면 예약된 후원의 배송지 정보도 삭제되나요?
      </Question>
      <Answer>
        현재 후원하신 프로젝트에 등록된 배송지가 삭제되거나 변경되지 않습니다.
        이를 변경하시려면 후원현황에서 변경해주세요.
        <a href="https://naver.com">내 후원현황 바로가기</a>
      </Answer>
    </Wrapper>
  );
};

export default MostQuestion;
