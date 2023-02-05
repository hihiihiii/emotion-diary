import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import MyButton from "../Components/MyButton";
import MyHeader from "../Components/MyHeader";
import { DiaryStateContext } from "../Router";
import { emotionList, getDateString } from "../util/Date";

const DiaryBlock = styled.div``;

const DiarySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DiaryFont = styled.h2`
  text-align: center;
`;

const DiaryImgWrapper = styled.div`
  width: 50%;
  height: 230px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
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

const DiaryImg = styled.img``;

const DiaryImgFont = styled.div``;

const DiaryContent = styled.div`
  border-radius: 5px;
  font-size: 24px;
  width: 100%;
  background-color: #ececec;
  height: 300px;
  padding: 20px;
`;

const Diary = () => {
  const [originData, setOriginData] = useState();
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList?.find((el) => el?.id === parseInt(id));

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!originData) {
    return <div>...로딩중입니다</div>;
  } else {
    const curEmotion = emotionList.find(
      (el) => el?.emotion === originData.emotion
    );

    return (
      <>
        {originData && (
          <DiaryBlock>
            <MyHeader
              leftChild={
                <MyButton text={"<"} onClick={() => navigate(-1)}></MyButton>
              }
              headText={`${getDateString(new Date(originData.date))} 기록`}
              rightChild={
                <MyButton
                  text={"수정하기"}
                  onClick={() => navigate(`/edit/${id}`)}
                ></MyButton>
              }
            ></MyHeader>

            <DiarySection>
              <DiaryFont>오늘의 감정</DiaryFont>
              <DiaryImgWrapper emotionSelect={originData.emotion}>
                <DiaryImg
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/emotion${originData.emotion}.png`
                  }
                ></DiaryImg>
                <DiaryImgFont>{curEmotion.emotion_desc}</DiaryImgFont>
              </DiaryImgWrapper>
            </DiarySection>
            <DiarySection>
              <DiaryFont>오늘의 일기</DiaryFont>
              <DiaryContent>{originData.content}</DiaryContent>
            </DiarySection>
          </DiaryBlock>
        )}
      </>
    );
  }
};

export default Diary;
