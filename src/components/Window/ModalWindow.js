import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Modal from 'components/Window/Modal';
import media from 'util/media';
import { AiOutlineClose } from 'react-icons/ai';

const AddWrapper = styled.div`
  border: 1px solid #979797;
  border-radius: 6px;
  background-color: white;
  padding: 26px;

  ${media.mobile`
    padding: 30px 20px 0 20px;
    border-radius: 0;
    border: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `}
  ${media.tablet`
    width: 510px;
    height: 412px;
  `}
  ${media.desktop`
    width: 510px;
    height: 412px;
  `}
`;

const AddToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  margin-bottom: 45px;

  ${media.mobile`
    margin-bottom: 60px;
  `}
`;
const Title = styled.div`
  font-size: 22px;
`;
const Row = styled.div`
    display: flex;
  ${media.mobile`
    flex-direction: column;
  `}
  ${media.tablet`
    justify-content: space-between;
  `}
  ${media.desktop`
    justify-content: space-between;
  `}
`;
const Name = styled.input.attrs({
  placeholder: '받는 사람',
})`
  border: 1px solid #979797;
  border-radius: 4px;
  width: 172px;
  padding: 13px 14px 12px 14px;
  ${media.mobile`
    width: 200px;
    margin-bottom: 50px;
  `}
`;
const PostCode = styled.input.attrs({
  placeholder: '우편번호',
})`
  border: 1px solid #979797;
  border-radius: 4px;
  width: 200px;
  padding: 13px 14px 12px 14px;
  margin-left: 28px;

  ${media.mobile`
    margin-left: 0;
  `}
`;
const AddressInput = styled.input.attrs({
  placeholder: '주소',
})`
  border: 1px solid #979797;
  border-radius: 4px;
  padding: 13px 14px 12px 14px;
  width: calc(100% - 30px);
`;

const Label = styled.label.attrs({})`
  font-size: 14px;
  color: #3d3d3d;
  margin-left: 8px;
`;
const CheckBox = styled.input.attrs({
  type: 'checkbox',
  value: true,
})`
  width: 20px
  height: 20px;
`;

const RegisterBtn = styled.div`
  background-color: #ed635e;
  font-size: 16px;
  color: #ffffff;
  padding: 15px 0 14px 0;
  text-align: center;
  width: 100%;
  cursor: pointer;
`;

const DelWrapper = styled.div`
  border: 1px solid #979797;
  border-radius: 6px;
  background-color: white;
  min-width: 320px;
`;
const Notification = styled.div`
  font-size: 18px;
  color: #2f2f2f;
  padding: 47px 71px 44px 72px;
  text-align: center;
`;
const DelToolBar = styled.div`
  border-top: 1px solid #aaaaaa;
  display: flex;
`;
const Button = styled.div`
  cursor: pointer;
  font-size: 18px;
  flex: 1;
  padding: 25px 0 21px 0;
  text-align: center;
  color: ${(props) => props.color || '#363636'};
`;

const ModalWindow = ({ id, mode, visible, onHide, onDelete }) => {
  const DeleteAddress = () => {
    onDelete(id);
    onHide();
  };

  return (
    <Modal visible={visible} onHide={onHide}>
      {mode === 'DELETE' && (
        <DelWrapper>
          <Notification>정말 삭제하시겠습니까?</Notification>
          <DelToolBar>
            <Button onClick={DeleteAddress} color="#ed635e">
              확인
            </Button>
            <Button onClick={onHide}>취소</Button>
          </DelToolBar>
        </DelWrapper>
      )}
      {mode === 'ADD' && (
        <AddWrapper>
          <AddToolBar>
            <Title>배송지 추가</Title>
            <AiOutlineClose
              style={{ fontSize: '20px', cursor: 'pointer' }}
              onClick={onHide}
            />
          </AddToolBar>
          <Row style={{ marginBottom: '50px' }}>
            <Name />
            <PostCode />
          </Row>
          <Row>
            <AddressInput />
          </Row>
          <div style={{ marginTop: '37px', marginBottom: '61px' }}>
            <CheckBox />
            <Label>기본배송지로 등록</Label>
          </div>
          <RegisterBtn>등록 완료</RegisterBtn>
        </AddWrapper>
      )}
    </Modal>
  );
};
ModalWindow.propTypes = {
  id: PropTypes.number,
  visible: PropTypes.bool,
  mode: PropTypes.string,
  onHide: PropTypes.func,
  onDelete: PropTypes.func,
};
ModalWindow.defaultProps = {
  id: 0,
  visible: false,
  mode: '',
  onHide: () => console.warn('[x] hide function'),
  onDelete: () => console.warn('[x] delete function'),
};

export default ModalWindow;
