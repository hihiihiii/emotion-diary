import React from "react";
import { Router } from "./Router";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Yeon+Sung&display=swap');
  body{
    font-family: 'Nanum Pen Script', cursive;
    font-family: 'Yeon Sung', cursive;
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Nanum Pen Script";
    min-height: 100vh;
    margin: 0px;
    box-sizing: border-box;

  }

  @media (min-width : 650px){
    .App{
      width: 640px;
    }
  }

  @media(max-width : 650px){
    width: 90vw;
  }

  #root{
    background-color: white;
    box-shadow: 0px 7px 29px 0px rgba(100,100,111, 0.2);
    padding: 20px;
  }

  .App{
    min-height: 100vh;
    padding-left: 20px;
    padding-right: 20px;
  }

`;

const App = () => {
  return (
    <>
      <GlobalStyled></GlobalStyled>
      <div className="App">
        <Router></Router>
      </div>
    </>
  );
};

export default App;
