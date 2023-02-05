import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  white-space: nowrap;
  font-family: "Nanum Pen Script";

  background-color: #ececec;
  color: #000;

  ${(props) => {
    if (props.type === "positive") {
      return css`
        background-color: #64c964;
        color: #fff;
      `;
    } else if (props.type === "negative") {
      return css`
        background-color: #e74c3c;
        color: #fff;
      `;
    }
  }}
`;

const MyButton = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <>
      <Button type={type} onClick={onClick}>
        {text}
      </Button>
    </>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
