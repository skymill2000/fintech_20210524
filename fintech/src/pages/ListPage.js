import React from "react";
import Header from "../component/common/Header";
import AuthButton from "../component/common/AuthButton";
import axios from "axios";
import qs from "qs";
const ListPage = () => {
  //axios 통해서 https://testapi.openbanking.or.kr/v2.0/user/me 의 계좌 목록을 받아오기
  //버튼을 눌렀을때 요청 발생
  const getAccountList = () => {
    let queryString = qs.stringify({
      user_seq_no: "1100034736",
    });

    const option = {
      method: "GET",
      url: "/v2.0/user/me?" + queryString,
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAwMDM0NzM2Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIiwidHJhbnNmZXIiXSwiaXNzIjoiaHR0cHM6Ly93d3cub3BlbmJhbmtpbmcub3Iua3IiLCJleHAiOjE2Mjk4NTY1ODcsImp0aSI6IjRmMDg3ZTIwLTUwMDAtNDhiMS1iMDY4LTYyYTNhYjA5NWUzZiJ9.P4TiASS3kJxPk2dkPRtaaRKe2WGb5FfRbvzE8xkTrCk",
      },
    };
    //#homework : 해당 코드가 동작하게 변경해주세요 ! hint : proxy, json serialization on axios
    axios(option).then((response) => {
      console.log(response.data);
    });
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
