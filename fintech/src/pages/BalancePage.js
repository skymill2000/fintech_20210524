import React from "react";
import Header from "../component/common/Header";

const BalancePage = () => {
  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "T991599190U" + countnum; //이용기과번호 본인것 입력
    return transId;
  };

  return (
    <>
      <Header title={"잔액 조회"}></Header>
      {genTransId()}
    </>
  );
};

export default BalancePage;
