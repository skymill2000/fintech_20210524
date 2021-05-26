import React from "react";
import styled from "styled-components";

const AuthButtonStyled = styled.button`
  padding: 1rem;
  background: #456fda;
  color: white;
  border: none;
  border-radius: 0.3rem;
`;

const AuthButton = ({ title }) => {
  return <AuthButtonStyled>{title}</AuthButtonStyled>;

  //<button className="authbuttonstyled"> {title} </button>
};

export default AuthButton;
