import React, { createContext, useEffect, useReducer, useRef } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import MyButton from "./Components/MyButton";
import MyHeader from "./Components/MyHeader";
import Diary from "./pages/Diary";
import Editor from "./pages/Editor";
import Home from "./pages/Home";
import New from "./pages/New";

//어떤 위치에 있건 process.env.PUBLIC_URL assets를 가르킨다.
const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    }
    case "REMOVE":
      newState = state?.filter((el) => el?.id !== action?.id);
      break;
    case "EDIT":
      newState = state.map((el) =>
        el.id === action.data.id ? { ...action.data } : el
      );
      break;
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
};

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

const dummyData = [
  // {
  //   id: 1,
  //   date: 1674576264296,
  //   content: "1번 아이디입니다.",
  //   emotion: 1,
  // },
  // {
  //   id: 2,
  //   date: 1674576264297,
  //   content: "2번 아이디입니다.",
  //   emotion: 2,
  // },
  // {
  //   id: 3,
  //   date: 1674576264298,
  //   content: "3번 아이디입니다.",
  //   emotion: 3,
  // },
  // {
  //   id: 4,
  //   date: 1674576264299,
  //   content: "4번 아이디입니다.",
  //   emotion: 4,
  // },
  // {
  //   id: 5,
  //   date: 1674576264300,
  //   content: "5번 아이디입니다.",
  //   emotion: 5,
  // },
];

export const Router = () => {
  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataId = useRef(0);

  useEffect(() => {
    const localData = localStorage.getItem("diary");

    if (localData) {
      const diaryList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );
      dataId.current = parseInt(diaryList[0].id) + 1;
      dispatch({ type: "INIT", data: diaryList });
    }
  }, []);

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  const onEdit = (targetId, date, emotion, content) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        emotion,
        content,
      },
    });
  };

  const onRemove = (id) => {
    dispatch({ type: "REMOVE", id });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/new" element={<New></New>} />
            <Route path="/edit/:id" element={<Editor></Editor>}></Route>
            <Route path="/diary/:id" element={<Diary></Diary>} />
          </Routes>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};
