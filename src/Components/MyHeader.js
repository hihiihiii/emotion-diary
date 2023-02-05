import React from "react";
import styled from "styled-components";

const MyHeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ececec;
`;

const LeftChild = styled.div``;

const RightChild = styled.div``;

const HeadText = styled.div`
  font-size: 24px;
`;

const MyHeader = ({ leftChild, headText, rightChild }) => {
  return (
    <MyHeaderBlock>
      <LeftChild>{leftChild}</LeftChild>
      <HeadText>{headText}</HeadText>
      <RightChild>{rightChild}</RightChild>
    </MyHeaderBlock>
  );
};

export default MyHeader;
