import styled from "styled-components";

const DiaryListBlock = styled.div``;

const DiaryMenuWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;

  select {
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    background-color: #ececec;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 20px;
    padding-left: 20px;

    cursor: pointer;
    font-family: "Nanum Pen Script";
    font-size: 18px;
  }
`;

const DiaryLeftMenu = styled.div``;

const DiaryRightMenu = styled.div`
  flex-grow: 1;

  button {
    width: 100%;
  }
`;

// selectbox

const SelectBox = styled.select``;

const OptionItem = styled.option``;

export {
  DiaryListBlock,
  DiaryMenuWrapper,
  DiaryLeftMenu,
  DiaryRightMenu,
  SelectBox,
  OptionItem,
};
