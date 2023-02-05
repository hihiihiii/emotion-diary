import React from "react";
import {
  EmotionDesc,
  EmotionListImg,
  EmotionListItem,
} from "../style/DiaryEditorStyle";

const EmotionItem = ({
  emotion,
  emotion_id,
  emotion_desc,
  onClick,
  isSelected,
}) => {
  return (
    <EmotionListItem
      onClick={() => onClick(emotion)}
      emotionSelect={isSelected && emotion}
    >
      <EmotionListImg src={emotion_id}></EmotionListImg>
      <EmotionDesc>{emotion_desc}</EmotionDesc>
    </EmotionListItem>
  );
};

export default EmotionItem;
