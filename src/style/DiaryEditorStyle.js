import styled, { css } from "styled-components";

const NewContainer = styled.div``;

const NewSection = styled.div`
  margin-bottom: 40px;
`;

const NewText = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const NewDate = styled.input`
  border: none;
  border-radius: 5px;
  background-color: #ececec;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;

  font-family: "Nanum Pen Script";
  font-size: 20px;
`;

const EmotionListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 2%;
`;

const EmotionListItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border-radius: 5px;
  background-color: #ededed;
  height: 125px;

  ${(props) => {
    switch (props.emotionSelect) {
      case 1:
        return css`
          background-color: #64c96c;
          color: white;
        `;
      case 2:
        return css`
          background-color: #9dd772;
          color: white;
        `;
      case 3:
        return css`
          background-color: #fdce17;
          color: white;
        `;
      case 4:
        return css`
          background-color: #fd8446;
          color: white;
        `;
      case 5:
        return css`
          background-color: #fd565f;
          color: white;
        `;
    }
  }}
`;

const EmotionListImg = styled.img`
  width: 50%;
  margin-bottom: 10px;
`;

const EmotionDesc = styled.div`
  font-size: 18px;
`;

// 일기 내용 스타일

const NewContent = styled.textarea`
  width: 100%;
  height: 180px;
  border: none;
  background-color: #ededed;
  padding: 10px;
  box-sizing: border-box;
  resize: none;
  border-radius: 6px;
  font-family: "Nanum Pen Script";
  font-size: 21px;
`;

const NewFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export {
  NewContainer,
  NewSection,
  NewText,
  NewDate,
  NewContent,
  NewFooter,
  EmotionListWrapper,
  EmotionListItem,
  EmotionListImg,
  EmotionDesc,
};
