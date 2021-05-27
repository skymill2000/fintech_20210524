import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../component/common/Header";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const BalancePage = () => {
  const [balance, setBalance] = useState("0");
  const { search } = useLocation();
  const { finuseno } = queryString.parse(search);

  useEffect(() => {
    getBalance();
  }, []);

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "T991599190U" + countnum; //이용기과번호 본인것 입력
    return transId;
  };

  const getBalance = () => {
    const option = {
      method: "GET",
      url: "/v2.0/account/balance/fin_num",
      headers: {
        Authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        bank_tran_id: genTransId(),
        fintech_use_num: finuseno,
        tran_dtime: "20210527151100",
      },
    };
    axios(option).then(({ data }) => {
      console.log(data.balance_amt);
      setBalance(data.balance_amt);
    });
  };

  return (
    <>
      <Header title={"잔액 조회"}></Header>
      <p>현재 귀하의 잔액은 : {balance}원 입니다</p>
    </>
  );
};

export default BalancePage;
