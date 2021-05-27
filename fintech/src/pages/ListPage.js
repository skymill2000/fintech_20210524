import React from "react";
import Header from "../component/common/Header";

const ListPage = () => {
  //axios 통해서 https://testapi.openbanking.or.kr/v2.0/user/me 의 계좌 목록을 받아오기
  //버튼을 눌렀을때 요청 발생
  return (
    <>
      <Header title="계좌 목록 확인"></Header>
    </>
  );
};

export default ListPage;
