import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ModalCard from "./ModalCard";

const ModalWithdrawBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #dfdfdf solid;
`;

const ModalWithdraw = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ModalWithdrawBlock>
      <Slider {...settings}>
        <ModalCard bankName="test" fintechUseNo="test"></ModalCard>
      </Slider>
    </ModalWithdrawBlock>
  );
};

export default ModalWithdraw;
