import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import MyButton from "./MyButton";

const DiaryItemWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ececec;
`;

const EmotionContainer = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  min-width: 120px;
  height: 80px;

  //emotion 색상정렬
  ${(props) => {
    switch (props.emotion) {
      case 1:
        return css`
          background-color: #64c96c;
        `;
      case 2:
        return css`
          background-color: #9dd772;
        `;
      case 3:
        return css`
          background-color: #fdce17;
        `;
      case 4:
        return css`
          background-color: #fd8446;
        `;
      case 5:
        return css`
          background-color: #fd565f;
        `;
    }
  }}
`;

const EmotionImg = styled.img`
  width: 50%;
  object-fit: cover;
`;

const ItemInfo = styled.div`
  cursor: pointer;
`;

const ItemDate = styled.div`
  font-weight: bold;
  font-size: 26px;
`;

const ItemContent = styled.div`
  font-size: 18px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const DiaryItem = ({ content, date, emotion, id }) => {
  const itemDate = new Date(date);
  const dateString = itemDate.toLocaleDateString();

  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <DiaryItemWrapper>
      <EmotionContainer emotion={emotion} onClick={goDetail}>
        <EmotionImg
          src={process.env.PUBLIC_URL + `./assets/emotion${emotion}.png`}
        ></EmotionImg>
      </EmotionContainer>
      <ItemContainer>
        <ItemInfo onClick={goDetail}>
          <ItemDate>{dateString}</ItemDate>
          <ItemContent>{content.slice(0, 25)}</ItemContent>
        </ItemInfo>
        <MyButton onClick={goEdit} text={"수정하기"}></MyButton>
      </ItemContainer>
    </DiaryItemWrapper>
  );
};

export default DiaryItem;
