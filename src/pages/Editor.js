import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DiaryEditor from "../Components/DiaryEditor";
import { DiaryStateContext } from "../Router";

const Editor = () => {
  const [originData, setOriginData] = useState();

  const navigate = useNavigate();
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (el) => parseInt(el?.id) === parseInt(id)
      );

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      {originData && (
        <DiaryEditor isEdit={true} originData={originData}></DiaryEditor>
      )}
    </div>
  );
};

export default Editor;
