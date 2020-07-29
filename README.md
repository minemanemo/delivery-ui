# 개요



## 제약사항 정리

- React 최신버전 (16.13.x 이상)
- CRA 또는 그에 준하는 개발 환경 세팅
- 상태 관리 (Redux, mobx, react context, vanilla JS)
- Linting, 코드 스타일링 (eslint, prettier)
- 라이브러리 사용 가능 (UI Theme 라이브러리 제외)



## 요구 사항

* 디자인에 따른 UI 구현 (Zeplin으로 제공)
* 반응형 웹 구현 (모바일, 테블릿, 데스크탑)
* 아래 사항은 README 파일에 기술
  * UI 기능 명세
  * API 명세
  * 설계 내용
  * ...

## 기능 요구 사항

`타이틀, 배송지 탭 내부 UI 구현`

#### 탭

* **탭 기능 구현 및 조건** 
  URL로 접근 가능
  탭 이동시 URL 변경 가능
  브라우징 기능(이전, 다음) 이동 가능
* **구현 탭**
  * /profile (프로필)
  * /account (계정)
  * /paymethod (결제수단)
  * /address (배송지)
  * /notification (알림)

#### 배송지

* **배송지 주소 리스트**
  * 기본 배송지는 최상단에 위치
  * 배송지는 기본 5개 노출
  * 더보기 버튼 구현
    * 클릭 시 나머지 배송지 노출 및 더보기 버튼 제거
* **배송지 (row)**
  * 각 배송지(row)의 우측 메뉴 버튼 구현
    * 다른 부분 클릭 시 메뉴 닫힘
  * 메뉴는 [ 기본 배송지 설정 ], [ 삭제 ] 로 구성
    * 기본 배송지로 설정 기능
      * 설정 시, 배송지 목록의 최상단으로 이동
      * 설정 시, Toast UI 출력 (3초 = 1.5초 유지 + 1.5초 사라짐)
    * 배송지 삭제 기능
      * 삭제 컨펌 윈도우 출력 (확인, 취소)
      * 모달
        * 윈도우 밖을 클릭하면 취소
        * 터치 스크롤, 스크롤 LOCK
      * 삭제 시, Toast UI 출력 (3초 = 1.5초 유지 + 1.5초 사라짐)
* **등록된 배송지 없음 컴포넌트**
* **배송지 추가 윈도우**
  * 모달
    * 윈도우 밖을 클릭하면 취소
    * 터치 스크롤, 스크롤 LOCK
  * INPUT 컴포넌트 
    * Validation Check에 따라서 error message, input box border color 변경
    * validation check 시점은 등록 완료 버튼 클릭 시
  * 컴포넌트 구현 항목
    * 받는 사람 (input text)
      * validation : 0 < length
      * error message : 받는 분 이름을 입력해주세요.
    * 우편 번호 (input text)
      * validation : 0 < length
      * error message : 우편번호를 입력해주세요.
    * 주소 (input text)
      * validation : 0 < length <= 25
      * error message : 주소를 입력해주세요.
    * 기본 배송지로 등록 (input check box)
    * 등록 완료 (submit button)



### 구현 컴포넌트 정리

* HEADER
  * 제목이 포함된 컴포넌트
* TAB NAVIGATOR
  * 탭을 이동하는 컴포넌트
* TAB ITEM
  * 탭의 항목 컴포넌트
* CONTENTS WRAPPER
  * flex : wrap
  * width
    * min : 360px
    * ~ 360px : 모바일
    * 360px ~ 767px : 테블릿
    * 767px ~ 1024px : 데스크탑
    * max : 1024px
* 배송지 AREA
* 배송지 TITLE
* 배송지 추가
* 배송지 LIST
* 배송지 LIST ITEM
* 배송지 LIST ITEM MENU
* 배송지 더보기
* QUESTION AREA
* QUESTION BOX
* TOAST MESSAGE
* 삭제 컨펌 윈도우
  * Tool Bar
    * TITLE
    * 닫기
  * 확인 버튼
  * 취소 버튼
* 모달(DIMMED)
* 배송지 없음
* 배송지 추가 윈도우
  * Tool Bar
    * TITLE
    * 닫기
  * 받는 사람 (input text)
  * 우편 번호 (input text)
  * 주소 (input text)
  * 기본 배송지로 등록 (input check box)
  * 등록 완료 (submit button)