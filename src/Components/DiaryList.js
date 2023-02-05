import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DiaryLeftMenu,
  DiaryListBlock,
  DiaryMenuWrapper,
  DiaryRightMenu,
  OptionItem,
  SelectBox,
} from "../style/DiaryListStyle";
import DiaryItem from "./DiaryItem";
import MyButton from "./MyButton";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
  { value: "all", name: "전부다" },
  { value: "good", name: "좋아요" },
  { value: "bad", name: "안좋아요" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <SelectBox value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((el, idx) => (
        <OptionItem key={idx} value={el?.value}>
          {el?.name}
        </OptionItem>
      ))}
    </SelectBox>
  );
};

const DiaryList = ({ diaryList }) => {
  //정렬 기준 state
  const [sortType, setSortType] = useState("latest");
  const [filterType, setFilterType] = useState("all");
  const navigate = useNavigate();

  const getProccessedDiaryList = () => {
    const filterCallback = (item) => {
      if (filterType === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    //깊은복사
    const copyList = JSON.parse(JSON.stringify(diaryList));
    const filteredList =
      filterType === "all"
        ? copyList
        : copyList.filter((el) => filterCallback(el));
    const sortList = filteredList.sort(compare);

    return sortList;
  };

  return (
    <DiaryListBlock>
      <DiaryMenuWrapper>
        <DiaryLeftMenu>
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          ></ControlMenu>
          <ControlMenu
            value={filterType}
            onChange={setFilterType}
            optionList={filterOptionList}
          ></ControlMenu>
        </DiaryLeftMenu>
        <DiaryRightMenu>
          <MyButton
            type={"positive"}
            text={"새 일기 쓰기"}
            onClick={() => navigate("/new")}
          ></MyButton>
        </DiaryRightMenu>
      </DiaryMenuWrapper>

      {getProccessedDiaryList().map((el) => (
        <DiaryItem key={el?.id} {...el}></DiaryItem>
      ))}
    </DiaryListBlock>
  );
};

export default DiaryList;
