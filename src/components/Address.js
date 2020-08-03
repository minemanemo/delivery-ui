import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'util/media';

import AddressList from 'components/AddressList';
import MostQuestion from 'components/MostQuestion';
import Dimmed from 'components/Dimmed';

const Wrapper = styled.div`
  ${media.wrapper}
`;

const ToolBox = styled.div`
  ${media.box}
  margin-top: 55px;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;

  ${media.desktop`
    max-width: 660px;
  `}
`;

const Title = styled.div`
  font-size: 20px;
  color: #3e3e3e;
`;

const AddButton = styled.div`
  font-size: 16px;
  color: #4ea3f8;
  cursor: pointer;
`;

const Contents = styled.div`
  ${media.box}
  ${media.mobile`
    margin: 0;
  `}

  ${media.desktop`
    display: flex;
  `}
`;

class Address extends Component {
  state = {
    addresses: [
      {
        id: 12382726352,
        postnumber: 203928,
        name: '홍길동',
        address: '서울시 강남구 강남대로 364, 11층',
      },
      {
        id: 12382726390,
        postnumber: 233958,
        name: '고길동',
        address: '서울시 강남구 가양대로 32, 가양아파트 21동 201호',
      },
      {
        id: 12382726393,
        postnumber: 243929,
        name: '이영신',
        address: '서울시 서초구 서초대로 311, 20층',
      },
      {
        id: 12382726493,
        postnumber: 303297,
        name: '이신영',
        address: '충청북도 강화군 양수리 223, 양수빌딩 9층',
      },
      {
        id: 12382726423,
        postnumber: 309126,
        name: '고신영',
        address: '인천시 강화군 양수리 213, 가양아파트 21동 201호',
      },
      {
        id: 12382726523,
        postnumber: 103235,
        name: '신동식',
        address: '군산시 화현군 수렴리 1223, 수렴빌팅 11층',
      },
      {
        id: 12382726535,
        postnumber: 603224,
        name: '허신영',
        address: '부산시 서면 가덕대로 23, 가덕아파트 8층',
      },
      {
        id: 12382726621,
        postnumber: 229313,
        name: 'Robert Kim',
        address: '군산시 강화군 양수리 101, 양수빌딩 12층',
      },
      {
        id: 12382726643,
        postnumber: 249281,
        name: '김하늘',
        address: '인천시 강화군 수렴리 223, 가양아파트 21동 201호',
      },
      {
        id: 12382726669,
        postnumber: 558348,
        name: '김우주',
        address: '인천시 강화군 양수리 112, 양수빌딩 9층',
      },
      {
        id: 12382726670,
        postnumber: 156346,
        name: '최태영',
        address: '경기도 고양시 고사리 223, 양수빌딩 9층',
      },
      {
        id: 12382726683,
        postnumber: 575645,
        name: '장두식',
        address: '인천시 강화군 양수리 22, 가양아파트 21동 201호',
      },
      {
        id: 12382726684,
        postnumber: 422344,
        name: '양판출',
        address: '경기도 강화군 고사리 101, 양수빌딩 9층',
      },
      {
        id: 12382726693,
        postnumber: 276761,
        name: '염하진',
        address: '충주시 강화군 양수리 112, 수리빌딩 19층',
      },
      {
        id: 12382726703,
        postnumber: 353630,
        name: '이하늘',
        address: '인천시 강화군 양수리 223, 가양아파트 21동 201호',
      },
      {
        id: 12382726722,
        postnumber: 234422,
        name: '박하늘',
        address: '경기도 고양시 고사리 101, 양수빌딩 9층',
      },
      {
        id: 12382726731,
        postnumber: 112355,
        name: '손예쁨',
        address: '인천시 강화군 양수리 223, 양수빌딩 9층',
      },
      {
        id: 12382726813,
        postnumber: 264578,
        name: '강주희',
        address: '충주시 수양리 3401, 양수빌딩 9층',
      },
      {
        id: 12382726834,
        postnumber: 734673,
        name: '최식',
        address: '인천시 강화군 양수리 223, 양가아파트 2동 301호',
      },
      {
        id: 12382726862,
        postnumber: 375440,
        name: '강누리',
        address: '인천시 강화군 고양리 223, 양수빌딩 9층',
      },
      {
        id: 12382726871,
        postnumber: 234251,
        name: '양하진',
        address: '경기도 고양시 고사리 22, 양수빌딩 9층',
      },
      {
        id: 12382727043,
        postnumber: 732255,
        name: '김두석',
        address: '인천시 중구 수요대로 223, 계양아파트 501동 23호',
      },
      {
        id: 12382727052,
        postnumber: 946466,
        name: '고명진',
        address: '인천시 검단면 효정동 112, 수빌딩 19층',
      },
      {
        id: 12382727071,
        postnumber: 332574,
        name: '양수현',
        address: '경기도 고양시 고사리 223, 장수빌라 302호',
      },
      {
        id: 12382727082,
        postnumber: 132789,
        name: '최고은',
        address: '인천시 중구 주안대로 112, 정수빌딩 11층',
      },
    ],
    defaultAddressID: 12382726390,
    more: 1,
    modal: {
      visible: false,
    },
  };

  modalHandler = {
    show: () => {
      this.setState({ modal: { visible: true } });
    },
    hide: () => {
      this.setState({ modal: { visible: false } });
    },
  };

  changeMore = () => {
    const { more } = this.state;
    this.setState({ more: more + 1 });
  };

  changeDefaultAddress = (id) => {
    this.setState({ defaultAddressID: id });
    // TODO: toast message 수정 필요
    this.toastRef.current.showMessage('기본 배송지가 변경되었습니다.');
  };
  deleteAddress = (id) => {
    const { addresses, defaultAddressID } = this.state;
    const findtarget = addresses.find((address) => address.id === id);
    const filteredAddresses = addresses.filter((address) => address.id !== id);

    if (findtarget.id === defaultAddressID) {
      console.log('limit delete address');
      return;
    }
    this.setState({ addresses: filteredAddresses });
  };

  render() {
    const { addresses, defaultAddressID, more, modal } = this.state;
    const { changeMore, changeDefaultAddress, deleteAddress } = this;
    return (
      <Wrapper>
        <ToolBox>
          <Title>등록된 배송지</Title>
          <AddButton>+ 추가</AddButton>
        </ToolBox>
        <Contents>
          <AddressList
            addresses={addresses}
            base={defaultAddressID}
            more={more}
            onClickMoreBtn={changeMore}
            updateDefaultAddress={changeDefaultAddress}
            deleteAddress={deleteAddress}
          />
          <MostQuestion />
        </Contents>
        <Dimmed visible={modal.visible} />
        <Toast ref={this.toastRef} />
      </Wrapper>
    );
  }
}

export default Address;
