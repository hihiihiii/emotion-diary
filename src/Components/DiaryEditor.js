import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import MyButton from "./MyButton";
import MyHeader from "./MyHeader";
import {
  EmotionListWrapper,
  NewContainer,
  NewContent,
  NewDate,
  NewFooter,
  NewSection,
  NewText,
} from "../style/DiaryEditorStyle";
import EmotionItem from "./EmotionItem";
import { DiaryDispatchContext } from "../Router";
import { emotionList, getDateString } from "../util/Date";

const DiaryEditor = ({ isEdit, originData }) => {
  const [date, setDate] = useState(getDateString(new Date()));
  const [emotion, setEmotion] = useState(3);
  const [content, setContent] = useState("");

  const contentRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const handleEmotion = (value) => setEmotion(value);

  const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext);

  useEffect(() => {
    if (isEdit) {
      setDate(getDateString(new Date(parseInt(originData.date))));
      setContent(originData.content);
      setEmotion(originData.emotion);
    }
  }, [isEdit, originData]);

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    if (
      window.confirm(
        isEdit ? "일기를 수정 하시겠습니까?" : "새로운 일기를 작성하시겠습니까?"
      )
    ) {
      if (!isEdit) {
        onCreate(date, content, emotion);
      } else {
        onEdit(originData.id, date, emotion, content);
      }
    }

    navigate("/", { replace: true });
  };

  const handleRemove = () => {
    if (window.confirm("정말 삭제 하시겠습니까?")) {
      onRemove(originData.id);
      navigate("/", { replace: true });
    }
  };

  return (
    <NewContainer>
      <MyHeader
        leftChild={
          <MyButton
            text={<MdKeyboardArrowLeft></MdKeyboardArrowLeft>}
            onClick={() => navigate(-1)}
          ></MyButton>
        }
        headText={
          location.pathname === "/new" ? "새로운 일기 쓰기" : "일기 수정하기"
        }
        rightChild={
          isEdit && (
            <MyButton
              text={"삭제하기"}
              type={"negative"}
              onClick={handleRemove}
            ></MyButton>
          )
        }
      ></MyHeader>
      <NewSection>
        <NewText>오늘은 언제인가요?</NewText>
        <NewDate
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
        ></NewDate>
      </NewSection>
      <NewSection>
        <NewText>오늘의 감정</NewText>
        <EmotionListWrapper>
          {emotionList.map((el) => (
            <EmotionItem
              onClick={() => handleEmotion(el?.emotion)}
              key={el?.emotion}
              {...el}
              isSelected={el?.emotion === emotion}
            ></EmotionItem>
          ))}
        </EmotionListWrapper>
      </NewSection>
      <NewSection>
        <NewText>오늘의 일기</NewText>
        <NewContent
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="오늘의 기분은 어땠나요?"
          ref={contentRef}
        ></NewContent>
      </NewSection>
      <NewFooter>
        <MyButton text={"취소"} onClick={() => navigate(-1)}></MyButton>
        <MyButton
          text={"작성완료"}
          type={"positive"}
          onClick={handleSubmit}
        ></MyButton>
      </NewFooter>
    </NewContainer>
  );
};

export default DiaryEditor;
