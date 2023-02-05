// export const getDateString = (date) => {
//   let year = String(date.getFullYear());
//   let month = String(date.getMonth() + 1);
//   let day = String(date.getDate());

//   return console.log(
//     `${year.padStart(2, 0)}-${month.padStart(2, 0)}-${day.padStart(2, 0)}`
//   );
// };

export const getDateString = (date) => {
  let year = date.getFullYear();

  let month = date.getMonth() + 1;

  let day = date.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};

export const emotionList = [
  {
    emotion: 1,
    emotion_id: process.env.PUBLIC_URL + `/assets/emotion1.png`,
    emotion_desc: "완전 좋음",
  },
  {
    emotion: 2,
    emotion_id: process.env.PUBLIC_URL + `/assets/emotion2.png`,
    emotion_desc: "좋음",
  },
  {
    emotion: 3,
    emotion_id: process.env.PUBLIC_URL + `/assets/emotion3.png`,
    emotion_desc: "보통",
  },
  {
    emotion: 4,
    emotion_id: process.env.PUBLIC_URL + `/assets/emotion4.png`,
    emotion_desc: "그냥그럼",
  },
  {
    emotion: 5,
    emotion_id: process.env.PUBLIC_URL + `/assets/emotion5.png`,
    emotion_desc: "안좋아요",
  },
];
