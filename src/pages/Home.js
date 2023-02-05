import React, { useContext, useEffect, useState } from "react";
import DiaryList from "../Components/DiaryList";
import MyButton from "../Components/MyButton";
import MyHeader from "../Components/MyHeader";
import { DiaryStateContext } from "../Router";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [curDate, setCurdate] = useState(new Date());
  const [data, setData] = useState([]);

  useEffect(() => {
    if (diaryList.length >= 1) {
      //현재 날에 1일
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      //현자 날에 마지막날
      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime();

      //현재 달에 있는 리스트만 뽑아오기
      setData(
        diaryList.filter((el) => el?.date >= firstDay && lastDay >= el?.date)
      );
    }
  }, [diaryList, curDate]);

  const dateString = curDate.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
  });

  const prevMonth = () => {
    setCurdate(new Date(curDate.getFullYear(), curDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurdate(new Date(curDate.getFullYear(), curDate.getMonth() + 1));
  };

  return (
    <div>
      <MyHeader
        leftChild={<MyButton text={"<"} onClick={prevMonth}></MyButton>}
        headText={dateString}
        rightChild={<MyButton text={">"} onClick={nextMonth}></MyButton>}
      ></MyHeader>

      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
