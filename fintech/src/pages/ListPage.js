import React from "react";
import Header from "../component/common/Header";
import AuthButton from "../component/common/AuthButton";
import axios from "axios";

const ListPage = () => {
  //axios 통해서 https://testapi.openbanking.or.kr/v2.0/user/me 의 계좌 목록을 받아오기
  //버튼을 눌렀을때 요청 발생
  const getAccountList = () => {
    const option = {
      method: "GET",
      url: "/v2.0/user/me",
      headers: {
        Authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        user_seq_no: localStorage.getItem("userSeqNum"),
      },
    };
    //#homework : 해당 코드가 동작하게 변경해주세요 ! hint : proxy, json serialization on axios
    axios(option).then((response) => {
      console.log(response.data);
    });
    // axios.get(url, {params : {user_seq_no: "1100034736"}}).then
  };
  return (
    <>
      <Header title="계좌 목록 확인"></Header>
      <AuthButton
        title="계좌 목록 불러오기"
        handleClick={getAccountList}
      ></AuthButton>
    </>
  );
};

export default ListPage;
