import React from "react";
import AuthButton from "../component/common/AuthButton";
import Header from "../component/common/Header";

const MainPage = () => {
  return (
    <>
      <Header title="사용자 인증"></Header>
      <AuthButton title="인증받기" />
    </>
  );
};

export default MainPage;
